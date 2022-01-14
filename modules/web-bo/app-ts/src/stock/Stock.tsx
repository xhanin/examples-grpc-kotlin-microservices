import './stockitem/StockItem'
import StockItem from "./stockitem/StockItem";

function Stock() {
    return (
        <div className="content">
            <p className="title">Cellar Stock</p>
            <p className="subtitle">My lovely bottles</p>
            <div className="content">
                <StockItem wineryName={"Chateau Margaux"} quantity={12} />
                <StockItem wineryName={"Chateau Giscours"} quantity={6} />
            </div>
        </div>
    );
}

export default Stock;
