package example.wineries.domain

import org.junit.jupiter.api.Test
import strikt.api.expectThat
import strikt.assertions.contains

internal class WineryServiceTest {
    @Test
    fun `should return wineries`() {
        expectThat(WineryService().listAll().map { it.name })
            .contains("Chateau Margaux", "Chateau Giscours")
    }
}
