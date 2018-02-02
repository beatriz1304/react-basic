import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends PureComponent {
  constructor(props) {
    console.log('APP - CONSTRUCTOR: ', props);
    super(props);
    this.state = {
      persons: [
        { id: '1', name: 'Beatriz', age: 25 },
        { id: '2', name: 'William', age: 25 },
        { id: '3', name: 'Yasmin', age: 16 },
      ],
      otherState: 'some other value',
      showPersons: false,
    };
  }

  componentWillMount() {
    console.log('APP - COMPONENT WILL MOUNT: ');
  }

  componentDidMount() {
    console.log('APP - COMPONENT DID MOUNT');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('APP - SHOULD UPDATE', nextProps, nextState);
  //   return nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('APP = WILL UPDATE', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('APP = DID UPDATE');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('APP - RENDER');
    let persons = null;

    if (this.state.showPersons) {
      persons =
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
    }

    return (
        <WithClass classes={classes.App}>
          <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}/>
          {persons}
        </WithClass>
    );
  }
}

export default App;
