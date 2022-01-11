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
    }

    componentDidMount() {
        const enableDevTools = window.__GRPCWEB_DEVTOOLS__ || (() => {});
        var winecellarService = new WinecellarServiceClient("http://sample-grpcweb.k3d.localhost:8098");
        enableDevTools([winecellarService]);

        winecellarService.loadStock(new LoadWinecellarStockRequest().setWinecellarid("111"), {}, (err, response) => {
            if (err) {
                console.log("error", err);
                return;
            }
            this.setState({items: response.getItemsList().map( (item) =>
                    <StockItem
                        key={item.getWineryref().getName()}
                        wineryName={item.getWineryref().getName()}
                        quantity={item.getQuantity()} />
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
