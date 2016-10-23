import React from 'react';
import Heading from '../components/heading.js';
import Search from '../components/searchBar.js'

export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <Heading />
        <Search />
      </div>
    )
  }
}
