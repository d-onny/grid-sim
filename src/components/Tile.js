import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./Tile.css"
import theme from "./Tile.css"
import Autosuggest from "react-autosuggest";

const items = [
    {name: "gas1"},
    {name: "gas2"},
    {name: "gas3"},
    {name: "flower"},
    {name: "club"},
    {name: "coffee"},
    {name: "juice"},
    {name: "sandwich"},
    {name: "taco"},
    {name: "spaghetti"},
    {name: "fair"},
    {name: "theater"},
    {name: "dance"},
    {name: "plane"},
    {name: "shopping"},
    {name: "home"},
    {name: "ring"},

]


const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : items.filter(item =>
      item.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };
  
  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  const getSuggestionValue = suggestion => suggestion.name;
  
  // Use your imagination to render suggestions.
  const renderSuggestion = suggestion => (
    <div>
      {suggestion.name}
    </div>
  );

class Tile extends React.Component{

    constructor(props){
        super(props);
        let x = this.props.x;
        let y = this.props.y;
        this.state = {
            isStart:false,
            isSelected:false,
            currentItem: null,
            value: '',
            suggestions: []
            // background: "green"
          };
    }

    handleSelect = (choice) => {
        if (choice.index > 0){
            this.setState({currentItem: choice.value})
        }
    }

    onChange = (event, { newValue }) => {
        this.setState({
          value: newValue
        });
      };
    
      // Autosuggest will call this function every time you need to update suggestions.
      // You already implemented this logic above, so just use it.
      onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
          suggestions: getSuggestions(value)
        });
      };
    
      // Autosuggest will call this function every time you need to clear suggestions.
      onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
      };
    

    render(){
        const { value, suggestions } = this.state;

        // Autosuggest will pass through all these props to the input.
        const inputProps = {
            placeholder: 'Tree',
            value,
            onChange: this.onChange
        };
        return (
            <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            // onSuggestionHighlighted={true}
            id={this.props.id} //doesnt work
            // theme={theme}
            // style={{background: this.state.background}}
            
          />
                // {/* <p>{this.props.x} {this.props.y}</p> */}
                // {/* <button>
                // </button> */}
    
        );
    }

};

export default Tile;