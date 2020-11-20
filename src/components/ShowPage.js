import React, { Component } from "react";
import HogCard from './HogCard'


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

getHog = (event) => {
  return this.props.hogs.map((hog) => {
  if (hog.name === event.target.id){
  (hogDetails(hog))}
})
}

indexHogs = ()  => {
  let pigPic;
  return this.props.hogs.map((hog) => (
       pigPic = require(`../hog-imgs/${this.formatName(hog.name)}.jpg`),
      <div className='ui eight wide column'>
        <p>{hog.name}</p>
        <img onClick={this.getHog} id={hog.name} width="200" src={pigPic} alt='pig pic'></img>
        <span>{this.state.show}</span>
        <HogCard hog={this.updateState} />
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