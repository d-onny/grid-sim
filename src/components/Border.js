import React, { useState } from "react";
import "./Border.css"


class Border extends React.Component {

    defaultColor = "lightblue"
    selectedColor = "red"

    constructor(props){
        super(props)
        this.state = {
            selected: false,
            color: this.defaultColor
            // orientation: 
        }
    }


    onClick = () => {
        let currentColor = this.changeColor(!this.state.selected)
        this.setState(prevState => ({
            selected: !prevState.selected,
            color: currentColor
        }))
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