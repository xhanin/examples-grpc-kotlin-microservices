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

refreshVersions {
    enableBuildSrcLibs()
}

rootProject.name = "examples-grpc-kotlin-microservices"

include(
    "modules:winery:proto",
    "modules:winery:stub",
    "modules:winery:domain",
    "modules:winery:infra-grpc-server",
    "modules:winery:application"
)

