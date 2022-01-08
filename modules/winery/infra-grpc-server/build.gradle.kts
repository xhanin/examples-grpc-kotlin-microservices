plugins {
    kotlin("jvm")
}

baseProject()

dependencies {
    implementation(project(":modules:winery:domain"))
    implementation(project(":modules:winery:stub"))

    implementation(KotlinX.coroutines.core)

    implementation("io.grpc:grpc-protobuf:_")
    implementation("com.google.protobuf:protobuf-java-util:_")
    implementation("com.google.protobuf:protobuf-kotlin:_")
    implementation("io.grpc:grpc-kotlin-stub:_")
}

java {
    sourceCompatibility = JavaVersion.VERSION_1_8
    targetCompatibility = JavaVersion.VERSION_1_8
}
