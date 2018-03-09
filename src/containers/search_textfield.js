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
      console.log(researchers);
      const names = researchers.map((item, index) => {
        if(searchTerm){
            return item.name.includes(searchTerm) ? <li key={index} style={{}}>{item.name}</li> : '';
        }else{
            return 
                <li key={index}>{item.name}</li>           
        }
    });
    console.log(names);

    return (
      <div>
        <input type="text"
               name="searchTerm"
               placeholder="Search name"
               size="50"
               value={this.state.searchTerm}
               onChange={this.onChange}
        />
        <div>
            <ul>{names}</ul>
        </div>
      </div>
    );
  }

}


export default SearchTextField;

