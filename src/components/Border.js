import React, { useState } from "react";
import "./Border.css"


class Border extends React.Component {

    defaultColor = "lightblue"
    selectedColor = "red"

    constructor(props){
        super(props)
        this.state = {
            selected: false,
            color: this.defaultColor,
            data: this.props
            // orientation: 
        }
    }


    onClick = () => {
        let currentColor = this.changeColor(!this.state.selected)
        this.setState(prevState => ({
            selected: !prevState.selected,
            color: currentColor
        }))
        let parentStateMap = {selected: !this.state.selected}
        // console.log(this.state.selected)
        this.props.updateGrid(this.props.row, this.props.index, parentStateMap)
    }

    changeColor(isSelected){
        if (isSelected){
            return this.selectedColor
        }
        else{
            return this.defaultColor
        }
    }

    render(){
        return(
            <button 
            className={"rect " + this.props.orientation }
            onClick={this.onClick}
            style={{background: this.state.color}}>
                
            </button>

        )
    }

}

export default Border;