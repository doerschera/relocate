import React from 'react';
import Select from './select.js';
import Button from './button.js';

export default class Compare extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Clicked!');
  }

  render() {
    return (
      <div class='row'>
        <Select cities={this.props.cities}/>
        <Select cities={this.props.cities}/>
        <Button name='compare' onClick={this.handleClick}/>
      </div>
    )
  }
}
