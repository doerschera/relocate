import React from 'react';
import Heading from '../components/heading.js';
import Search from '../components/searchBar.js';
import Compare from '../components/compare.js';

export default class Landing extends React.Component {

  render() {
    return (
      <div>
        <Heading />
        <Search />
        <Compare cities={this.props.cities}/>
      </div>
    )
  }
}
