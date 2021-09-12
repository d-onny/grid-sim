import React from "react";
import Tile from "./Tile";
import Border from "./Border";
import DeadSquare from "./DeadSquare";
import { Container } from "react-bootstrap";
class Grid extends React.Component {

    constructor(props){
        super(props);

        // this.state = {
        //     isSelected:false,
        // };
    }



    renderGrid(activeTilesInRow, numberOfRows) {
        //activeTilesInRow is the lower number of the active rows. In this case, it is 5.
        //TODO - change to map
        let gridMatrix = [];
        let horizontalRow = true;
        let counter = 0;

        //Loop through the y (how tall the grid is)
        for (let y = numberOfRows-1; y > -1; y--){
            let rowTiles = [];
            let emptyFirstIndex;
            //Determine if it is the horizontal row (car facing horizontal)
            if (horizontalRow){
                emptyFirstIndex = true;
            }
            else{
                emptyFirstIndex = false;
            }
            //Create the empty and active tile cells in a specific row
            for (let x = 0; x < 2*activeTilesInRow+1; x++){
                let xCoord = Math.floor(x/2)


                if (horizontalRow){

                }
                

                if(emptyFirstIndex){
                    //REMOVE Y COORD DISPLAY
                    if(horizontalRow){
                        rowTiles.push(<DeadSquare/>)

                    }
                    else{
                        rowTiles.push(<Tile id={y}/>)
                    }
                }
                else{
                    if(horizontalRow){
                        rowTiles.push(<Border 
                            orientation="horizontal" 
                            key={counter} 
                            />)
                    }
                    else{
                        rowTiles.push(<Border 
                            orientation="vertical" 
                            key={counter} 
                            />)
                    }

                    counter++;

                }
                emptyFirstIndex = !emptyFirstIndex

            }
            horizontalRow = !horizontalRow
            // gridMatrix.push(<div className="row disp">{rowTiles}</div>)
            gridMatrix.push(<Container fluid>{rowTiles}</Container>)

        }

        return(
            <div className="grid">
                {gridMatrix}
            </div>
        )
    };

    render(){
        //Change variables
        const rowCount = 15;
        const columnCount = 5;
        const grid = this.renderGrid(columnCount, rowCount)
        return (
            <div className="grid-container">
                {grid}
            </div>
        )
    }

};

export default Grid;