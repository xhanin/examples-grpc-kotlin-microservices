package example.wineries.app

import example.wineries.domain.WineryService
import example.wineries.grpcServer.WineryServiceGrpc
import io.grpc.Server
import io.grpc.ServerBuilder
import io.grpc.protobuf.services.ProtoReflectionService

class WineryApplication(val port:Int) {
    private var server: Server

    init {
        val wineryService = WineryService()
        server = ServerBuilder.forPort(port)
            .addService(WineryServiceGrpc(wineryService))
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
    WineryApplication(8888).run {
        start()
        blockUntilShutdown()
    }
}
