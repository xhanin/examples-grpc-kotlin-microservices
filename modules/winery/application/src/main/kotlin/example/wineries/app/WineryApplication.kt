package example.wineries.app

import com.sksamuel.hoplite.ConfigLoader
import com.sksamuel.hoplite.PropertySource
import example.wineries.domain.WineryService
import example.wineries.grpcServer.WineryServiceGrpc
import io.grpc.Server
import io.grpc.ServerBuilder
import io.grpc.protobuf.services.ProtoReflectionService
import kotlin.io.path.Path

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

data class ServerConfig(val port:Int)
data class Config(val server:ServerConfig)

fun main(arguments: Array<String>) {
    val config = ConfigLoader.Builder()
        .addSource(PropertySource.commandLine(arguments))
        .addSource(PropertySource.environment())
        .addSource(PropertySource.path(Path("/etc/server/config.yaml"), optional = true))
        .addSource(PropertySource.string(
            """
            server:
              port: 8888
            """.trimIndent(),
            "yaml"
        ))
        .build()
        .loadConfigOrThrow<Config>()

    WineryApplication(config.server.port).run {
        start()
        blockUntilShutdown()
    }
}
