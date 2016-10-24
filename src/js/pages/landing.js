import React from 'react';
import Heading from '../components/heading.js';
import Search from '../components/searchBar.js';
import Compare from '../components/compare.js';

export default class Landing extends React.Component {

  render() {
    return (
      <div>
        <Heading />
        <Search showSearch={this.props.showSearch.bind(this)}/>
        <Compare cities={this.props.cities}/>
      </div>
    )
  }
}
