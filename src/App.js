import logo from './logo.svg';
import './App.css';
import VerticalList from './components/VerticalList';
import Grid from './components/Grid';
import { Component } from 'react';
import GenerateCodeButton from './components/GenerateCodeButton';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      data: [],
      grid: []
    }
  }

  updateGrid = newGrid => {
    this.setState({grid:newGrid})
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          {/* <VerticalList 
            updateParent={this.updateSteps} 
            steps={this.state.steps}/> */}
          <Grid updateGrid={this.updateGrid}/>
        </div>
        <div className="container">
          <GenerateCodeButton grid={this.state.grid}/>

        </div>
      
      </div>

    )
  }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
