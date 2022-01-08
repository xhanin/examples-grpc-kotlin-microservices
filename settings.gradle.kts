pluginManagement {
    repositories {
        gradlePluginPortal()
        google()
    }
}

plugins {
    // See https://jmfayard.github.io/refreshVersions
    id("de.fayard.refreshVersions") version "0.30.1"
}

rootProject.name = "examples-grpc-kotlin-microservices"

include(
    "modules:wineries:proto",
    "modules:wineries:stub",
    "modules:wineries:domain",
    "modules:wineries:infra-grpc-server",
    "modules:wineries:application"
)

