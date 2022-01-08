import org.gradle.api.JavaVersion
import org.gradle.api.Project
import org.gradle.api.tasks.testing.Test
import org.gradle.kotlin.dsl.*
import java.net.URI

/**
 * Configures the current project as a Kotlin project
 */
fun Project.kotlinProject() {
    dependencies {
        "implementation"(kotlin("stdlib"))
    }
}

/**
 * Configures the current project with base dependencies:
 * - kotlin
 * - junit
 * - strikt
 */
fun Project.baseProject() {
    kotlinProject()

    dependencies {
        "testImplementation"("io.strikt:strikt-core:_")
        "testImplementation"("org.junit.jupiter:junit-jupiter-api:_")
        "testRuntimeOnly"("org.junit.jupiter:junit-jupiter-engine:_")
    }

    tasks.getByPath("test").doFirst {
        with(this as Test) {
            useJUnitPlatform()
        }
    }
}

