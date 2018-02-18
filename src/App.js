import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import SearchBarContainer from './components/SearchBarContainer';
import SearchFieldContainer from './components/SearchFieldContainer';
import DisplayResearchers from './components/DisplayResearchers';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Header />
        <SearchBarContainer />
        <SearchFieldContainer />
        <DisplayResearchers />
        <Footer />
      </div>
    );
  }
}

export default App;
