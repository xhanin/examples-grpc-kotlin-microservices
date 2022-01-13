import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import {LoadWinecellarStockRequest} from "../proto/example/winecellar/winecellar_pb"
import {WinecellarServiceClient} from "../proto/example/winecellar/winecellar_grpc_web_pb"

import StockItem from "./stockitem/StockItem";

function Stock() {
    const [items, setItems] = useState([]);

    const {getAccessTokenSilently} = useAuth0();

    const loadStock = async () => {
        const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});
        var winecellarService = new WinecellarServiceClient("http://sample-grpcweb.k3d.localhost:8098");
        enableDevTools([winecellarService]);

        const token = await getAccessTokenSilently();
        console.log(token)

        winecellarService.loadStock(new LoadWinecellarStockRequest().setWinecellarid("111"), {"Authorization": "Bearer " + token}, (err, response) => {
            if (err) {
                console.log("error", err);
                return;
            }
            setItems(response.getItemsList().map( (item) =>
                <StockItem
                    key={item.getWineryref().getName()}
                    wineryName={item.getWineryref().getName()}
                    quantity={item.getQuantity()} />
            ));
        });
    };

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
