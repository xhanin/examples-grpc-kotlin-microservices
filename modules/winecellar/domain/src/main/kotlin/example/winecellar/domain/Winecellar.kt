package example.winecellar.domain

data class Winecellar(
    val id:String, val owner:String, val name:String,
    val items:List<WinecellarItem>
    )

data class WinecellarItem(val wineryRef:WineryRef, val quantity:Int)

data class WineryRef(val wineryId:String, val name: String)
