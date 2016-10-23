import React from 'react';
import Select from './select.js';
import Button from './button.js';

export default class Compare extends React.Component {
  render() {
    return (
      <div class='row'>
        <Select />
        <Select />
        <Button name='compare' />
      </div>
    )
  }
}
