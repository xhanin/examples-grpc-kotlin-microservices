package example.winecellar.spi.svc

import example.winecellar.domain.WineryRef
import example.winecellar.domain.WineryService
import example.winery.WineryServiceGrpcKt
import example.winery.getWineryByIdRequest
import io.grpc.Channel

class WineryServiceGrpcImpl(channel: Channel) :WineryService {
    private val client: WineryServiceGrpcKt.WineryServiceCoroutineStub

    init {
        client = WineryServiceGrpcKt.WineryServiceCoroutineStub(channel)
    }

    override suspend fun getRefById(id: String): WineryRef? =
        try {
            client.getById(getWineryByIdRequest { this.id = id }).let {
                WineryRef(it.id, it.name)
            }
        } catch (e:Exception) {
            println("error occured: $e")
            null
        }
}
