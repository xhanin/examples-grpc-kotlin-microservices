plugins {
    kotlin("jvm")
}

baseProject()

dependencies {
    implementation(KotlinX.coroutines.core)
}

java {
    sourceCompatibility = JavaVersion.VERSION_1_8
    targetCompatibility = JavaVersion.VERSION_1_8
}

