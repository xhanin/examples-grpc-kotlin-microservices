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

listOf("proto", "stub", "domain", "infra-grpc-server", "application").forEach {
    include("modules:winery:$it")
}
listOf("proto", "stub", "domain", "infra-svc-grpc-client", "infra-grpc-server", "application").forEach {
    include("modules:winecellar:$it")
}

