package example.winecellar.spi.svc

import example.winecellar.domain.WineryRef
import example.winecellar.domain.WineryService
import example.winery.WineryServiceGrpcKt
import example.winery.getWineryByIdRequest

class WineryServiceGrpcImpl(private val client: WineryServiceGrpcKt.WineryServiceCoroutineStub):WineryService {
    override suspend fun getRefById(id: String): WineryRef? {
        return client.getById(getWineryByIdRequest { this.id = id }).let {
            if (it.hasWinery()) {
                WineryRef(it.winery.id, it.winery.name)
            } else {
                null
            }
        }
    }
}
