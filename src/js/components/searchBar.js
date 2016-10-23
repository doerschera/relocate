import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div class='row'>
        <div class='col s4 offset-s4'>
          <input class='input-field' value='search'></input>
        </div>
      </div>
    )
  }
}
