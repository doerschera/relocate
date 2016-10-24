import React from 'react';
import reactDOM from 'react-dom';
import Landing from './pages/landing.js';
import SearchPage from './pages/searchPage.js';

const cities = ['Choose a City','New York, NY', 'Chicago, IL', 'Seattle, WA'];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      compare: false
    }
  }

  // render functions
  showSearch(query) {
    if(cities.indexOf(query) != -1 & query != cities[0]) {
      console.log('success');

      this.setState({search: true});
    }
  }

  showCompare() {
    if(this.state.compare) {
      return <Compare />
    }
  }

  // handle button clicks


  render() {
    var search;
    if(this.state.seach == true) {
      search = <h1>Hello</h1>
    } else {
      search = null;
    }

    return (
      <div>
        <Landing
          cities={cities}
          showSearch = {this.showSearch.bind(this)}
        />
        <div>{this.state.search ? <SearchPage /> : null}</div>
      </div>
    );
  }
}

reactDOM.render(<App />, document.getElementById('app'));
