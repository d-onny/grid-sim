import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Grid from "./Grid";

export default class VerticalList extends React.Component {
    constructor(props){
        super(props);
        let grid = 0;
        this.state = {
            items: this.getItems(10),
            steps: []
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    //Handling new steps (if they are arranged/deleted/created)
    handleNewStep(currentSteps) {
      this.setState({
        steps: currentSteps
      })
      this.props.updateParent(this.state.steps)
    }

    reorder(list, startIndex, endIndex) {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
      
        return result;
    };

    getItems = count =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
    }));

    getItemStyle(isDragging, draggableStyle){
        let grid = this.grid;
        return {
            // some basic styles to make the items look a bit nicer
            userSelect: "none",
            padding: grid * 2,
            margin: `0 0 ${grid}px 0`,
          
            // change background colour if dragging
            background: isDragging ? "lightgreen" : "grey",
          
            // styles we need to apply on draggables
            ...draggableStyle
          }
    }

    getListStyle(isDraggingOver) {
        return ({
            background: isDraggingOver ? "lightblue" : "lightgrey",
            padding: this.grid,
            width: 250
          })

    }


    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
          return;
        }
    
        const items = this.reorder(
          this.state.items,
          result.source.index,
          result.destination.index
        );
    
        this.setState({
          items
        });
      }

      render(){

          return (
            <DragDropContext onDragEnd={this.onDragEnd}>
            <Droppable droppableId="droppable">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  style={this.getListStyle(snapshot.isDraggingOver)}
                >
                  {this.state.items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={this.getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          {item.content}
                        </div>
                      )}
                
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          );
      }

    




}