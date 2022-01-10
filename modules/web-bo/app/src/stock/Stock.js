import React from 'react';

import {LoadWinecellarStockRequest} from "../proto/example/winecellar/winecellar_pb"
import {WinecellarServiceClient} from "../proto/example/winecellar/winecellar_grpc_web_pb"

import StockItem from "./stockitem/StockItem";

class Stock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.load();
    }

    load() {
        var winecellarService = new WinecellarServiceClient("http://sample-grpc.k3d.localhost:8098");

        var request = new LoadWinecellarStockRequest().setWinecellarid("111");
        console.log("sending request to server");
        winecellarService.loadStock(request, {}, (err, response) => {
            if (err) {
                console.log("error", err);
                return;
            }
            console.log("response", response);
            var items = response.getItemsList().map( (item) => {
                return {quantity: item.getQuantity(), wineryName: item.getWineryref().getName()};
            });
            console.log(items)
            this.setState({items: items.map( (item) =>
                    <StockItem wineryName={item.wineryName} quantity={item.quantity} />
                )});
        });
    }

    render() {
        return (
            <div className="content">
                <p className="title">Cellar Stock</p>
                <p className="subtitle">My lovely bottles</p>
                <div className="content">
                    {this.state.items}
                </div>
            </div>
        );
    }
}

export default Stock;
