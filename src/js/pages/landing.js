import React from 'react';
import Heading from '../components/heading.js';
import Search from '../components/searchBar.js';
import Select from '../components/select.js';
import Button from '../components/button.js';

export default class Landing extends React.Component {

  render() {
    return (
      <div>
        <Heading />
        <Search />
        <div class='row'>
          <Select />
          <Select />
          <Button name="compare"/>
        </div>
      </div>
    )
  }
}
