package example.wineries.grpcServer

import example.wineries.domain.WineryService
import example.winery.*
import io.grpc.Status
import io.grpc.StatusException
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow

class WineryServiceGrpc(private val svc: WineryService) : WineryServiceGrpcKt.WineryServiceCoroutineImplBase() {
    override fun listAll(request: ListAllWineriesRequest): Flow<Winery> {
        return svc.listAll().map { it.toProto() }.asFlow()
    }

    override suspend fun getById(request: GetWineryByIdRequest): Winery =
        svc.getById(request.id)?.toProto()
            ?: throw StatusException(Status.NOT_FOUND)
}

private fun example.wineries.domain.Winery.toProto(): Winery {
    val it = this
    return winery {
        id = it.id
        name = it.name
        appelation = it.appelation
    }
}
