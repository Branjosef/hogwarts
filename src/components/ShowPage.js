import React, { Component } from "react";
import { HotModuleReplacementPlugin } from "webpack";

class ShowPage extends Component {
constructor() {
  super();
  this.state = {
    show: ''
  }
}

formatName = (name) => {
 return (name.split(' ').join('_').toLowerCase())
}

// showDetails = (event) => {
//   return this.props.hogs.map((hog) => {
//   if (hog.name === event.target.id)
//     console.log('hello')
//   // <p>{hog.specialty}</p>,
//   // <p>{hog.greased}</p>,
//   // <p>{hog.weight}</p>
//   }
//  )
// }

indexHogs = ()  => {
  let pigPic;
  return this.props.hogs.map((hog) => (
       pigPic = require(`../hog-imgs/${this.formatName(hog.name)}.jpg`),
      <div className='ui eight wide column'>
        <p>{hog.name}</p>
        <img onClick={this.showDetails} id={hog.name} width="200" src={pigPic} alt='pig pic'></img>
        {/* {this.showDetails} */}
      </div>     
  ))
}



  render() {
    return (
      <div className='ui grid container'>
      {this.indexHogs()}
      </div>
    );
  }
}

export default ShowPage;