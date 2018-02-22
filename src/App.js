import React, { Component } from 'react';
/* import NavBar from './components/NavBar';
import Header from './components/Header'; */
import SearchBarComponent from './components/search_bar';
import ResearcherList from './containers/researcher_list';
import PrimarySearch from './components/primary_search';
/*import SearchFieldContainer from './components/SearchFieldContainer';
import DisplayResearchers from './components/DisplayResearchers';
import Footer from './components/Footer'; */

class App extends Component {
  render() {
    return (
      <div className="App">
        <PrimarySearch />
        <SearchBarComponent />
        <ResearcherList />
      </div>
    );
  }
}

export default App;
