import React, { Component } from 'react'

export class HogCard extends Component {
    render() {
      
        return (
            <div>
                <span>
                    <p>{this.props.hog.specialty}</p>
                    <p>{this.props.hog.greased}</p>
                    <p>{this.props.hog.weight}</p>
                </span>
            </div>
        )
    }
}

export default HogCard
