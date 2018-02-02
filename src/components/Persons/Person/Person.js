import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('PERSON - CONSTRUCTOR: ', props);
  }

  componentWillMount() {
    console.log('PERSON - COMPONENT WILL MOUNT: ');
  }

  componentDidMount() {
    console.log('PERSON - COMPONENT DID MOUNT');
  }

  render() {
    console.log('PERSON - RENDER');
    return (
      <Aux>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </Aux>
    )
  }
}

export default withClass(Person, classes.Person);
