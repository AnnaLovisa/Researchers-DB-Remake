import React, { Component } from 'react';
import '../src/css/main.css';
import NavBar from './components/navbar';
/* import SearchTextfield from './components/search_textfield';
import ResearcherList from './containers/researcher_list';
import DisplaySearchMenu from './components/search_menus';*/
import DisplayResearchers from './containers/researcher_display';
/*import Footer from './components/Footer'; */


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {/* <SearchTextField /> */} 
        {/* <DisplaySearchMenu /> */}
        <DisplayResearchers />
       {/*  <SearchBarComponent />
        <ResearcherList /> */}
      </div>
    );
  }
}

export default App;
