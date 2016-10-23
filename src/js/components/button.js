import React from 'react';

export default class Button extends React.Component {
  render() {
    return <button class='btn waves-effect waves-light'>{this.props.name}</button>;
  }
}
