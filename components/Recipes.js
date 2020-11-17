import React from 'react';

// example of a stateless functional component
// const Recipes = (props) => {
//   return(
//     <div className="recipe">
//       <h1>{props.heading}</h1>
//     </div>
//   )
// }

class Recipes extends React.Component{
  render(){
    return(
      <div className="recipe">
        <h1>{this.props.heading}</h1>
      </div>
    )
  }
}

export default Recipes;