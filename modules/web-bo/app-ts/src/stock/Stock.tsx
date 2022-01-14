import React, {useState} from 'react';

import {LoadWinecellarStockRequest} from "../proto/example/winecellar/winecellar_pb"
import {WinecellarServiceClient} from "../proto/example/winecellar/WinecellarServiceClientPb"

import StockItem from "./stockitem/StockItem";

function Stock() {
    const [items, setItems] = useState([] as JSX.Element[]);

    const loadStock = () => {
        // @ts-ignore
        const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});
        var winecellarService = new WinecellarServiceClient("http://sample-grpcweb.k3d.localhost:8098");
        enableDevTools([winecellarService]);

        var request = new LoadWinecellarStockRequest().setWinecellarid("111");
        console.log("sending request to server");
        winecellarService.loadStock(request, {}, (err, response) => {
            if (err) {
                console.log("error", err);
                return;
            }
            let elements = response.getItemsList().map( (item) =>
                <StockItem
                    key={item.getWineryref()?.getName()}
                    wineryName={item.getWineryref()?.getName()??""}
                    quantity={item.getQuantity()} />
            );
            setItems(elements);
        });
    }

    return (
        <div className="content">
            <div className="title level">
                <div className="level-left">
                    <div className="level-item">
                        Cellar Stock
                    </div>
                </div>
                <div className="level-right">
                    <div className="level-item">
                        <button className="button is-link" onClick={loadStock}>
                            Load stock
                        </button>
                    </div>
                </div>
            </div>
            <p className="subtitle">My lovely bottles</p>
            <div className="content">
                {items}
            </div>
        </div>
    );
}

export default Stock;
