package example.winecellar.domain

interface WineryService {
    suspend fun getRefById(id:String): WineryRef?
    suspend fun loadRefById(id:String): WineryRef = getRefById(id)?:throw IllegalArgumentException("winery $id not found")
}
