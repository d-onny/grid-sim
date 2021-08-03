import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./Tile.css"

class Tile extends React.Component{

    constructor(props){
        super(props);
        let x = this.props.x;
        let y = this.props.y;
        this.state = {
            isSelected:false,
        };
    }

    render(){
        return (
            <div className="square">
                {this.props.x} {this.props.y}
                {/* <button>
                </button> */}
            </div>
    
        );
    }

};

export default Tile;