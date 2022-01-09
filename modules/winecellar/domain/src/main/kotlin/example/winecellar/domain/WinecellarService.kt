package example.winecellar.domain

class WinecellarService(private val wineryService:WineryService) {
    suspend fun listAll() = listOf(
        Winecellar(
            "111",
            "John Doe",
            "John Doe's main wine cellar",
            listOf(
                WinecellarItem(wineryService.loadRefById("mgx"), 6),
                WinecellarItem(wineryService.loadRefById("gis"), 12)
            )
        )
    )

    suspend fun getById(id:String) = listAll().find { it.id == id }
}
