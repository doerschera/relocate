import React from 'react';
import reactDOM from 'react-dom';
import Landing from './pages/landing';

const cities = ['New York, NY', 'Chicago, IL', 'Seattle, WA'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      compare: false
    }
  }

  // render functions
  showSearch() {
    if(this.state.search) {
      return <Search />
    }
  }

  showCompare() {
    if(this.state.compare) {
      return <Compare />
    }
  }

  // handle button clicks

  render() {
    return <Landing cities={cities} />;
  }
}

reactDOM.render(<App />, document.getElementById('app'));
