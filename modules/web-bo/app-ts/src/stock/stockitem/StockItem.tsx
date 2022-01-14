import * as React from "react";

export interface Props {
    /** The winery's name */
    wineryName: string;
    /** The quantity of bottles in stock */
    quantity: number;
}

const StockItem: React.FC<Props> = props => {
    return (
        <div className="block">
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        {props.wineryName}
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        <span>{props.quantity}</span> bottles of <span>{props.wineryName}</span>
                    </div>
                </div>
                <footer className="card-footer">
                    <a href="#" className="card-footer-item">Save</a>
                    <a href="#" className="card-footer-item">Edit</a>
                    <a href="#" className="card-footer-item">Delete</a>
                </footer>
            </div>
        </div>
    );
}

export default StockItem;
