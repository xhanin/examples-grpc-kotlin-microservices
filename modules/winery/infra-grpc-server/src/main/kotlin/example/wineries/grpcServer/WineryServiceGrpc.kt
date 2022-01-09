package example.wineries.grpcServer

import example.wineries.domain.WineryService
import example.winery.*
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow

class WineryServiceGrpc(private val svc: WineryService) : WineryServiceGrpcKt.WineryServiceCoroutineImplBase() {
    override fun listAll(request: ListAllWineriesRequest): Flow<Winery> {
        return svc.listAll().map { it.toProto() }.asFlow()
    }

    override suspend fun getById(request: GetWineryByIdRequest): GetWineryByIdResponse =
        svc.getById(request.id)?.toProto()
            ?.let {
                getWineryByIdResponse {
                    winery = it
                }
            }
            ?: getWineryByIdResponse {}
}

private fun example.wineries.domain.Winery.toProto(): Winery {
    val it = this
    return winery {
        id = it.id
        name = it.name
        appelation = it.appelation
    }
}
