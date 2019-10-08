import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      rept:""
    } 
  }
 repetidor = (e) => {
    this.setState({rept:e.target.value});
  }

  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo" onChange={this.repetidor}/>
        <p className="repeater">{this.state.rept}</p>
      </div>
    );
  }
}

export default App;
