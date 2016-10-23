import React from 'react';
import Button from './button.js'

export default class SearchBar extends React.Component {
  render() {
    return (
      <div class='row'>
        <div class='col s4 offset-s4'>
          <input class='input-field' value='search'></input>
          <Button name='search' />
        </div>
      </div>
    )
  }
}
