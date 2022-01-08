plugins {
    id("com.google.protobuf") apply false
    kotlin("jvm") apply false // Compose Compiler required version
    id("org.jlleitschuh.gradle.ktlint")
}

allprojects {
    repositories {
        mavenLocal()
        mavenCentral()
        google()
    }

    apply(plugin = "org.jlleitschuh.gradle.ktlint")
}
