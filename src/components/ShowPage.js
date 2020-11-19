import React, { Component } from "react";

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


indexHogs = ()  => {
  let pigPic;
  return this.props.hogs.map((hog) => (
       pigPic = require(`../hog-imgs/${this.formatName(hog.name)}.jpg`),
      <div className='ui eight wide column'>
        <p>{hog.name}</p>
        <img src={pigPic} alt='pig pic'></img>
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
