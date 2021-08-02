import React from "react";
import Tile from "./Tile";

const Grid = props => {
    const rowCount = 7;
    const columnCount = 6;

    // fillGrid = ()=>{
        
    // }

    return (
        <div className="grid-container">
            <Tile/>
            <Tile/>
        </div>
    )
};

export default Grid;