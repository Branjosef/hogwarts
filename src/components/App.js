import React, { Component } from "react";
import "../App.css";
import NavBar from "./NavBar";
import hogs from "../porkers_data";
import HogBrowser from "./HogBrowser"


class App extends Component {

  constructor(){
    super()
    this.state= {
      hogs: hogs,
      filters: {
        type: 'all'
      }
    }
  }

   pigInfo = (name) => {
    console.log(name)
   }

   filtered = (filteredValue) => {
     this.setState=({
       filters:{
         type: filteredValue
       } 
     })
   }


  render() {
    return (
      <div className="App">
        <NavBar />
        <HogBrowser hogs={this.state.hogs} pigInfo={this.pigInfo}/>
      </div>
    );
  }
}

export default App;
