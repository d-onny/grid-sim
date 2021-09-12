import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./DeadSquare.css"

class DeadSquare extends React.Component{

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
            <button className={"square"}>
            </button>
    
        );
    }

};

export default DeadSquare;