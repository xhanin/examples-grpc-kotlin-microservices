package example.wineries.app

import com.sksamuel.hoplite.ConfigLoader
import com.sksamuel.hoplite.PropertySource
import example.winecellar.domain.WinecellarService
import example.winecellar.grpcServer.WinecellarServiceGrpc
import example.winecellar.spi.svc.WineryServiceGrpcImpl
import io.grpc.ManagedChannelBuilder
import io.grpc.Server
import io.grpc.ServerBuilder
import io.grpc.protobuf.services.ProtoReflectionService
import kotlin.io.path.Path

class WinecellarApplication(config:Config) {
    private val server: Server
    private val port = config.server.port

    init {
        val wineryService = WineryServiceGrpcImpl(config.winery.buildChannel())

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

fun GrpcClientConfig.buildChannel() = ManagedChannelBuilder
    .forTarget(target).let { if (insecure) it.usePlaintext() else it }
    .build()

data class GrpcClientConfig(val target:String, val insecure:Boolean = false)
data class ServerConfig(val port:Int)
data class Config(val server:ServerConfig, val winery:GrpcClientConfig)

fun main(arguments: Array<String>) {
    val config = ConfigLoader.Builder()
        .addSource(PropertySource.commandLine(arguments))
        .addSource(PropertySource.environment())
        .addSource(PropertySource.path(Path("/etc/server/config.yaml"), optional = true))
        .addSource(PropertySource.string(
            """
            server:
              port: 8889
            winery:
              target: localhost:8888
              insecure: true
            """.trimIndent(),
            "yaml"
        ))
        .build()
        .loadConfigOrThrow<Config>()

    WinecellarApplication(config).run {
        start()
        blockUntilShutdown()
    }
}
