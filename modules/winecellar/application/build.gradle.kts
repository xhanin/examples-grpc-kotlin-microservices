plugins {
    application
    kotlin("jvm")
}

baseProject()

dependencies {
    implementation(project(":modules:winecellar:domain"))
    implementation(project(":modules:winecellar:stub"))
    implementation(project(":modules:winecellar:infra-grpc-server"))
    implementation(project(":modules:winecellar:infra-svc-grpc-client"))
    implementation(project(":modules:winery:stub"))

    implementation("com.sksamuel.hoplite:hoplite-core:_")
    implementation("com.sksamuel.hoplite:hoplite-yaml:_")

    implementation(KotlinX.coroutines.core)

    implementation("io.grpc:grpc-protobuf:_")
    implementation("io.grpc:grpc-services:_") {
        because("grpc server reflection")
    }
    implementation("com.google.protobuf:protobuf-java-util:_")
    implementation("com.google.protobuf:protobuf-kotlin:_")
    implementation("io.grpc:grpc-kotlin-stub:_")
    runtimeOnly("io.grpc:grpc-netty:_")
}

java {
    sourceCompatibility = JavaVersion.VERSION_1_8
    targetCompatibility = JavaVersion.VERSION_1_8
}

application {
    mainClass.set("example.winecellar.app.WinecellarApplicationKt")
    applicationName = "winecellar-server"
}
