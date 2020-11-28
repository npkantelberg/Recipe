import React from 'react';
import {getFunName} from '../helpers';

class Search extends React.Component{
  render(){
    return(
      <input className="search-input" type="text" defaultValue={getFunName()} />
    )
  }
}

export default Search;