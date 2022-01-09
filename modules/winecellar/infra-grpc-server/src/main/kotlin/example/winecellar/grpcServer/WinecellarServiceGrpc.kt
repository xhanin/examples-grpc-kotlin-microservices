package example.winecellar.grpcServer

import example.winecellar.*
import example.winecellar.domain.WinecellarItem
import example.winecellar.domain.WinecellarService
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.asFlow
import kotlinx.coroutines.runBlocking

class WinecellarServiceGrpc(private val svc: WinecellarService) : WinecellarServiceGrpcKt.WinecellarServiceCoroutineImplBase() {
    override fun listAll(request: ListAllWinecellarRequest): Flow<Winecellar> = runBlocking {
        svc.listAll().map { it.toProto() }.asFlow()
    }

    override suspend fun loadStock(request: LoadWinecellarStockRequest): WinecellarStock {
        val cellar = svc.getById(request.wineCellarId)
        return cellar?.toStockProto()?:throw IllegalArgumentException("cellar not found ${request.wineCellarId}")
    }
}

private fun example.winecellar.domain.Winecellar.toStockProto(): WinecellarStock {
    val it = this
    return winecellarStock {
        this.wineCellarId = it.id
        it.items.forEach { item ->
            this.items.add(item.toProto())
        }

    }
}

private fun WinecellarItem.toProto(): WinecellarStockItem {
    val it = this
    return winecellarStockItem {
        this.wineryRef = wineryRef {
            this.id = it.wineryRef.wineryId
            this.name = it.wineryRef.name
        }
        this.quantity = it.quantity
    }
}

private fun example.winecellar.domain.Winecellar.toProto(): Winecellar {
    val d = this
    return winecellar {
        id = d.id
        owner = d.owner
        name = d.name
    }
}
