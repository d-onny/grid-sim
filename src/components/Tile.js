import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./Tile.css"

class Tile extends React.Component{

    constructor(props){
        super(props);
        let x = this.props.x;
        let y = this.props.y;
        this.state = {
            isStart:false,
            isSelected:false,
        };
    }

    render(){
        return (
            <button className={"square " + this.props.typeOfSquare}>
                <p>{this.props.x} {this.props.y}</p>
                {/* <button>
                </button> */}
            </button>
    
        );
    }

};

export default Tile;