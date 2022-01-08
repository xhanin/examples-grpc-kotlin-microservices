plugins {
    application
    kotlin("jvm")
}

baseProject()

dependencies {
    implementation(project(":modules:winery:domain"))
    implementation(project(":modules:winery:stub"))
    implementation(project(":modules:winery:infra-grpc-server"))

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
