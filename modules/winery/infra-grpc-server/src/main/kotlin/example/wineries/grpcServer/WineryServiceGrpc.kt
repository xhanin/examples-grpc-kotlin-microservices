package example.wineries.grpcServer

import example.wineries.domain.WineryService
import example.winery.ListAllWineriesRequest
import example.winery.Winery
import example.winery.WineryServiceGrpcKt
import example.winery.winery
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow

class WineryServiceGrpc(private val svc: WineryService) : WineryServiceGrpcKt.WineryServiceCoroutineImplBase() {
    override fun listAll(request: ListAllWineriesRequest): Flow<Winery> {
        return svc.listAll().map { winery { name = it.name } }.asFlow()
    }
}
