import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Beatriz', age: 25},
      {name: 'William', age: 25},
      {name: 'Yasmin', age: 16},
    ],
    otherState: 'some other value',
    showPersons: false,
  }

  switchNamehandler = (newName) => {
    this.setState({
      persons:[
        {name: newName, age: 25},
        {name: 'William', age: 25},
        {name: 'Yasmin', age: 15},
      ]
    })
  }

  nameChangedHandler = event => {
    this.setState({
      persons:[
        {name: 'Bia', age: 25},
        {name: event.target.value, age: 25},
        {name: 'Yasmin', age: 15},
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNamehandler.bind(this, 'Claudia')}
            changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}/>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
