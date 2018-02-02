import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    console.log('PERSONS - CONSTRUCTOR: ', props);
  }

  componentWillMount() {
    console.log('PERSONS - COMPONENT WILL MOUNT: ');
  }

  componentDidMount() {
    console.log('PERSONS - COMPONENT DID MOUNT');
  }

  componentWillReceiveProps(nextProps) {
    console.log('PERSONS - WILL RECEIVE PROPS', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('PERSONS - SHOULD UPDATE', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('PERSONS = WILL UPDATE', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('PERSONS = DID UPDATE');
  }

  render() {
    console.log('PERSONS - RENDER');
    return this.props.persons.map((person, index) => {
      return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}/>
    });
  }
}

export default Persons;
