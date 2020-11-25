import React from 'react' 
import { render } from 'react-dom'


class HogCard extends React.Component {
  
 constructor() {
   super()
   this.state={
     fullView: false
   }
  }

  handleClick = () => {
    this.setState({
      fullView: !this.state.fullView
    })
    this.render()

  }

  imageRen = () => {
    let name = this.props.name.split(' ').join('_').toLowerCase()
    let pigImage = require(`../hog-imgs/${name}.jpg`)
    return <img src={pigImage} alt={name} width='200px'></img>
  }


  render(){
    if (this.state.fullView === false){
      return (
        <div className='ui eight wide column card' onClick={() => {this.handleClick()}}>
          <h3>{this.props.name}</h3>
          {this.imageRen()}
        </div>
      )
    } 
    else if (this.state.fullView === true){
      return (
        <div className='ui eight wide column card' onClick={() => {this.handleClick()}}>
          <h3>{this.props.name}</h3>
          {this.imageRen()}
          <p>greased: {this.props.greased === true ? 'yes' : 'no'}</p>
          <p>specialty: {this.props.specialty}</p>
          <p>weight: {this.props.weight}</p>
          <p>highest medal achieved: {this.props.highestMedalAchieved}</p>
        </div>
    )}
  }
}

export default HogCard