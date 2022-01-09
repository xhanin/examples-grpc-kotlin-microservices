package example.wineries.domain

class WineryService {
    fun listAll() = listOf(
        Winery("mgx","Chateau Margaux", "Margaux"),
        Winery("gis","Chateau Giscours", "Margaux")
    )

    fun getById(id:String) = listAll().find { it.id == id }
}
