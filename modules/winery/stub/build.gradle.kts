import com.google.protobuf.gradle.generateProtoTasks
import com.google.protobuf.gradle.id
import com.google.protobuf.gradle.plugins
import com.google.protobuf.gradle.protobuf
import com.google.protobuf.gradle.protoc
import de.fayard.refreshVersions.core.versionFor

plugins {
    kotlin("jvm")
    id("com.google.protobuf")
}

baseProject()

dependencies {
    protobuf(project(":modules:winery:proto"))

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

kotlin {
    listOf("java", "kotlin", "grpc", "grpckt").forEach {
        sourceSets.getByName("main").kotlin.srcDir("build/generated/source/proto/main/$it")
    }
}

tasks.withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile>().all {
    kotlinOptions {
        freeCompilerArgs = listOf("-Xopt-in=kotlin.RequiresOptIn")
    }
}

tasks.withType<Jar>().configureEach {
    archiveBaseName.set("winery-stub")
}

protobuf {
    protoc {
        artifact = "com.google.protobuf:protoc:${versionFor("version.com.google.protobuf..protoc")}"
    }
    plugins {
        id("grpc") {
            artifact = "io.grpc:protoc-gen-grpc-java:${versionFor("version.io.grpc..protoc-gen-grpc-java")}"
        }
        id("grpckt") {
            artifact = "io.grpc:protoc-gen-grpc-kotlin:${versionFor("version.io.grpc..protoc-gen-grpc-kotlin")}:jdk7@jar"
        }
    }
    generateProtoTasks {
        all().forEach {
            it.plugins {
                id("grpc")
                id("grpckt")
            }
            it.builtins {
                id("kotlin")
            }
        }
    }
}
