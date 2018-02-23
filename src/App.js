import React, { Component } from 'react';
/* import Navbar from './components/navbar';
import Header from './components/header'; */
/* import SearchTextfield from './components/search_textfield';
import ResearcherList from './containers/researcher_list';
import DisplaySearchMenu from './components/search_menus';*/
import DisplayResearchers from './containers/researcher_display';
/*import Footer from './components/Footer'; */

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <DisplaySearchMenu /> */}
        <DisplayResearchers />
       {/*  <SearchBarComponent />
        <ResearcherList /> */}
      </div>
    );
  }
}

export default App;
