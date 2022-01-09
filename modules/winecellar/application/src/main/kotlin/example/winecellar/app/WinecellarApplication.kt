package example.wineries.app

import example.winecellar.domain.WinecellarService
import example.winecellar.grpcServer.WinecellarServiceGrpc
import example.winecellar.spi.svc.WineryServiceGrpcImpl
import io.grpc.ManagedChannelBuilder
import io.grpc.Server
import io.grpc.ServerBuilder
import io.grpc.protobuf.services.ProtoReflectionService

class WinecellarApplication(val port:Int) {
    private var server: Server

    init {
        val wineryService = WineryServiceGrpcImpl(
            ManagedChannelBuilder
                .forTarget("localhost:8888").usePlaintext()
                .build()
        )

        val winecellarService = WinecellarService(wineryService)
        server = ServerBuilder.forPort(port)
            .addService(WinecellarServiceGrpc(winecellarService))
            .addService(ProtoReflectionService.newInstance())
            .build()
    }

    fun start() {
        server.start()
        println("Server started, listening on $port")
        Runtime.getRuntime().addShutdownHook(
            Thread {
                println("*** shutting down gRPC server since JVM is shutting down")
                stop()
                println("*** server shut down")
            }
        )
    }

    fun stop() {
        server.shutdown()
    }

    fun blockUntilShutdown() {
        server.awaitTermination()
    }
}

fun main() {
    WinecellarApplication(8889).run {
        start()
        blockUntilShutdown()
    }
}
