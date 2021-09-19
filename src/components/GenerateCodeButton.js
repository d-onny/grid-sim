import React from "react";

class GenerateCodeButton extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            code: ""
            // orientation: 
        }
    }

    generateHash(mapDetails){
        let mapDetailsString = JSON.stringify(mapDetails)
        console.log(mapDetails)
        let mapDetailsEncode = btoa(mapDetailsString)
        this.setState({code: mapDetailsEncode})
    }

    onClick = () => {
        let currentGrid = this.props.grid;
        let gridSize = currentGrid.size
        let itemLocations =  {}
        let walls = []
        let letterRowAsciiValue = 65 //ascii value for "A"


        for (let rowNumber = 0; rowNumber < gridSize; rowNumber++){
            let currentRow = currentGrid.get(rowNumber)
            let letterRow = String.fromCharCode(letterRowAsciiValue)
            
            let horizontalRow = !Boolean(rowNumber%2) //else it is a vertical row

            for (let index = 0; index < currentRow.length; index++){
                let selectedCounter = 0;
                let currentRowObject = currentRow[index]
                let toGridPoint = ""
                let currentPoint = Math.floor(index/2) + 1
                if (currentRowObject.selected){
                    let currentGridPoint = letterRow + currentPoint.toString()
                    if (horizontalRow){
                        toGridPoint = letterRow + (currentPoint+1).toString()

                    }
                    else{
                        //This means the selected is a vertical wall
                        toGridPoint = String.fromCharCode(letterRowAsciiValue+1) + currentPoint.toString()

                    }
                    walls.push([currentGridPoint, toGridPoint])

                }
                else if (currentRowObject.item){
                    //Add toLowercase eventually
                    itemLocations[currentRowObject.item] = letterRow + currentPoint
                }
            }

            if (!horizontalRow){
                letterRowAsciiValue++;
            }
        }
        this.generateHash({walls: walls, items: itemLocations})
    }


    render(){
        return(
            <div>
                <button
                onClick={this.onClick}>
                    Generate code
                </button>
                
                <form>
                    <label>
                    
                    <input readonly type="text" value={this.state.code}/>
                    </label>
                </form>
            </div>
        )
    }
}

// const GenerateCodeButton = props => {
//     return (
//         <div> 
//             <button>

//             </button>
//         </div>
//     )
// }

export default GenerateCodeButton;