import React from 'react' 
import HogCard from './HogCard'


class HogBrowser extends React.Component {

  generateHogCards = () => {
    return this.props.hogs.map((hog) => 
      <HogCard 
        greased={hog.greased}
        highestMedalAchieved={hog['highest medal achieved']}
        name={hog.name}
        specialty={hog.specialty}
        weight={hog.weight}
        pigInfo={this.props.pigInfo}
      />
    )
  }


  render(){
    return <div className="ui grid container">{this.generateHogCards()}</div>  
  }

}

export default HogBrowser