import React from 'react';
import Button from './button.js';

export default class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value);
  }

  render() {
    const citiesOpts = this.props.cities.map((city, i) => <option value={i} key={i}>{city}</option>);

    return (
      <div class='col s4 offset-s4'>
        <select class='browser-default' value={this.state.value} onChange={this.handleChange}>
          {citiesOpts}
        </select>
      </div>
    )
  }
}
