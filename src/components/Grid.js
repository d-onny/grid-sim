import React from "react";
import Tile from "./Tile";
import Border from "./Border";
import DeadSquare from "./DeadSquare";
import { Container } from "react-bootstrap";
class Grid extends React.Component {

    constructor(props){
        super(props);
        this.keyCount=0

        this.state = {
            gridRowStates: new Map(),
            renderedGrid: null
        };

        this.changeGridRowState = this.changeGridRowState.bind(this);
    }

    getKey(){
        return this.keyCount++;
    }


    renderGrid(activeTilesInRow, numberOfRows) {
        //activeTilesInRow is the lower number of the active rows. In this case, it is 5.
        //TODO - change to map
        let gridMatrix = [];
        let gridState = new Map();

        let horizontalRow = true;
        let counter = 0;
        console.log("asdasdas")

        //Loop through the y (how tall the grid is)
        for (let y = numberOfRows-1; y > -1; y--){
            let rowTiles = [];
            let rowState = [];
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
                        rowTiles.push(<DeadSquare key={this.getKey()}
                            row={y}
                            index={x}/>)
                        rowState.push({})

                    }
                    else{
                        rowTiles.push(<Tile key={this.getKey()}
                            row={y}
                            index={x}
                            updateGrid={this.changeGridRowState}/>)
                        rowState.push({item: ""})
                    }
                }
                else{
                    if(horizontalRow){
                        rowTiles.push(<Border 
                            orientation="horizontal" 
                            key={this.getKey()}
                            row={y}
                            index={x}
                            updateGrid={this.changeGridRowState}
                            />)
                        rowState.push({selected: false})
                    }
                    else{
                        rowTiles.push(<Border 
                            orientation="vertical" 
                            key={this.getKey()}
                            row={y}
                            index={x}
                            updateGrid={this.changeGridRowState}
                            />)
                        rowState.push({selected: false})
                    }

                    // counter++;

                }
                emptyFirstIndex = !emptyFirstIndex

            }
            horizontalRow = !horizontalRow
            // gridMatrix.push(<div className="row disp">{rowTiles}</div>)
            gridMatrix.push(<Container key={this.getKey()} fluid>{rowTiles}</Container>)
            gridState.set(y, rowState);
        }
        if (this.state.gridRowStates.size === 0){
            this.setState({gridRowStates : gridState})
        }

        return(
            <div className="grid">
                {gridMatrix}
            </div>
        )
    };

    changeGridRowState(row, index, newMapToSet){ //Maybe add type as well?
        let currentGridRowState = this.state.gridRowStates;

        //set the value in currentGridRowState then set state by replacing
        let currentRow = currentGridRowState.get(row);
        currentRow[index] = newMapToSet;
        currentGridRowState.set(row, currentRow);
        this.setState({gridRowStates : currentGridRowState})
        
        //Update parent
        this.props.updateGrid(this.state.gridRowStates)
        console.log(this.state.gridRowStates)
    }

    componentDidMount(){
        const rowCount = 15;
        const columnCount = 5;
        const grid = this.renderGrid(columnCount, rowCount)
        this.setState({ renderedGrid: grid})
    }

    render(){
        //Change variables

        return (
            <div className="grid-container">
                {this.state.renderedGrid}
            </div>
        )
    }

};

export default Grid;