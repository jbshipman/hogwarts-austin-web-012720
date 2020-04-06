import React, { Component } from 'react';
import PigCard from './PigCard';

export default class PigTiles extends Component {
  constructor(props) {
    super()
  };
  // map on array
  makePigTiles() {
    return this.props.allHogs.map((pig, idx) => <PigCard key={idx} pig={pig} />)

  };

  

  render() {
    return (
      <div>
        {this.makePigTiles()}
      </div>
    )
  }
}
