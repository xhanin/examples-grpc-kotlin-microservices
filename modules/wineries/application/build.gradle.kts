plugins {
    application
    kotlin("jvm")
}

baseProject()

dependencies {
    implementation(project(":modules:wineries:domain"))
    implementation(project(":modules:wineries:stub"))
    implementation(project(":modules:wineries:infra-grpc-server"))

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
    mainClass.set("example.wineries.app.WineryApplicationKt")
    applicationName = "winery-server"
}
