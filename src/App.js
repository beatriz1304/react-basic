import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Beatriz', age: 25},
      {name: 'William', age: 25},
      {name: 'Yasmin', age: 16},
    ]
  }

  switchNamehandler = () => {
    this.setState({
      persons:[
        {name: 'Beatriz da Silveira', age: 25},
        {name: 'William', age: 25},
        {name: 'Yasmin', age: 15},
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNamehandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
