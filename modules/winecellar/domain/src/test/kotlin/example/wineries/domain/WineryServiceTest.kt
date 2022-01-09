package example.wineries.domain

import example.winecellar.domain.WinecellarService
import example.winecellar.domain.WineryRef
import example.winecellar.domain.WineryService
import kotlinx.coroutines.runBlocking
import org.junit.jupiter.api.Test
import strikt.api.expectThat
import strikt.assertions.*

internal class WinecellarServiceTest {
    @Test
    fun `should return winecellar`() = runBlocking {
        val wineryService = object:WineryService {
            override suspend fun getRefById(id: String): WineryRef? = WineryRef(id, "Chateau $id")
        }
        val winecellarService = WinecellarService(wineryService)
        expectThat(winecellarService.getById("111")).isNotNull().and {
            get { id }.isEqualTo("111")
            get { name }.isEqualTo("John Doe's main wine cellar")
            get { items }.hasSize(2).and {
                get(0).and {
                    get { quantity }.isEqualTo(6)
                    get { wineryRef.wineryId }.isEqualTo("mgx")
                    get { wineryRef.name }.isEqualTo("Chateau mgx")
                }
                get(1).and {
                    get { quantity }.isEqualTo(12)
                    get { wineryRef.wineryId }.isEqualTo("gis")
                    get { wineryRef.name }.isEqualTo("Chateau gis")
                }
            }
        }
    }
}
