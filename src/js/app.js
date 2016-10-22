import React from 'react';
import reactDOM from 'react-dom';
import Landing from './pages/landing';

class Hello extends React.Component {
  render() {
    return <Landing />;
  }
}

reactDOM.render(<Hello />, document.getElementById('app'));
