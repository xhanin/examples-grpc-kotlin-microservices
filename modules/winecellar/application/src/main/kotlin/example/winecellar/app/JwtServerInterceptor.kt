package example.winecellar.app

import io.grpc.*

class JwtServerInterceptor : ServerInterceptor {
    override fun <ReqT, RespT> interceptCall(
        serverCall: ServerCall<ReqT, RespT>,
        metadata: Metadata,
        serverCallHandler: ServerCallHandler<ReqT, RespT>
    ): ServerCall.Listener<ReqT> {
        val authorization = metadata.get(Metadata.Key.of("authorization", Metadata.ASCII_STRING_MARSHALLER))
        if (authorization?.lowercase()?.startsWith("bearer ") == true) {
            val token = authorization.substring("bearer ".length)
            println("token: $token")
        }
        return Contexts.interceptCall(Context.current(), serverCall, metadata, serverCallHandler)
    }
}
