import React from "react";
import Tile from "./Tile";

class Grid extends React.Component {

    constructor(props){
        super(props);

        // this.state = {
        //     isSelected:false,
        // };
    }




    renderGrid(column, row) {
        //TODO - change to map
        let gridMatrix = [];
        for (let y = row-1; y > -1; y--){
            let rowTiles = [];
            for (let x = 0; x < column; x++){
                rowTiles.push(<Tile key={{x}+{y}} x={x} y={y}
                    />)
            }
            gridMatrix.push(<div>{rowTiles}</div>)
        }

        return(
            <div className="grid">
                {gridMatrix}
            </div>
        )
    };

    render(){
        const rowCount = 7;
        const columnCount = 6;
        const grid = this.renderGrid(columnCount, rowCount)
        return (
            <div className="grid-container">
                {grid}
            </div>
        )
    }

};

export default Grid;