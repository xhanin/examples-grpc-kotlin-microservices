rootProject.name = "examples-grpc-kotlin-microservices"

include(
    "modules:wineries:proto",
    "modules:wineries:stub",
    "modules:wineries:domain",
    "modules:wineries:infra-grpc-server",
    "modules:wineries:application"
)

pluginManagement {
    repositories {
        gradlePluginPortal()
        google()
    }
}

