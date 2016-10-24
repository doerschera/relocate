import React from 'react';
import Button from './button.js'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'search'}
    this.handleChange = this.handleChange.bind(this);
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleInputClick() {
    this.setState({value: ''});
  }

  handleClick() {
    var query = this.state.value;
    this.props.showSearch(query);
  }

  render() {
    return (
      <div class='row'>
        <div class='col s4 offset-s4'>
          <input class='input-field' onChange={this.handleChange} value={this.state.value} onClick={this.handleInputClick}></input>
          <Button name='search' onClick={this.handleClick}/>
        </div>
      </div>
    )
  }
}
