import React, { Component } from 'react';
import { ROOT_URL } from '../actions/shared';

class SearchTextField extends Component {

  state = {
    researchers: [],
    searchTerm: '',
    hasFetched: false
  }

   componentDidMount() {
    this.fetchResearchers();
  }


  fetchResearchers = (param) => {
    fetch(ROOT_URL)
    .then(blob => blob.json())
    .then(data => {
      this.setState({ researchers: data })
    })
    .catch(function(error){
        console.log('Error' + error);
    })

  }

  onChange = (event) => this.setState({[event.target.name] : event.target.value})
 
    render() {

      const { searchTerm, researchers } = this.state;
      const names = researchers.map((item, index) => {
        if(searchTerm){
            return item.name.includes(searchTerm) ? <li key={index}>{item.name}, {item.workingGroup}</li> : '';
        }else{
            return 
                <li key={index}>{item.name}</li>           
        }
    });


    return (
      <div>
        <input type="text"
               name="searchTerm"
               placeholder="Search name"
               size="45"
               value={this.state.searchTerm}
               onChange={this.onChange}
               className="search-input"
        />
        <div>
            <ul style={{listStyleType: "none"}}>{names}</ul>
        </div>
      </div>
    );
  }

}


export default SearchTextField;

