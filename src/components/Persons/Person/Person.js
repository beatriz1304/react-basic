import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

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
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  render() {
    console.log('PERSON - RENDER');
    return (
      <Aux>
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          ref={(inp) => { this.inputElement = inp }}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}/>
      </Aux>
    )
  }
}

Person.PropTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);
