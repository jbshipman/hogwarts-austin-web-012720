import React, { Component } from 'react';
import PigTiles from './PigTiles';
import Selectors from './Selectors';

export default class PigWrapper extends Component {
  constructor() {
    super()

    this.state = {
      allHogs: [],
      sort: 'all'
    };
    this.pigSorting=this.pigSorting.bind(this)
  };

  componentDidMount() {
    // console.log(this.props)
    this.setState({
      allHogs: this.props.allHogs
    });
  };

  pigSorting(e) {
    // console.log(e.target.value)
    const sortType = e.target.value;
    if (sortType === 'name') {
      this.setState({
        allHogs: this.state.allHogs.sort((hog1, hog2) => hog1.name < hog2.name)
      })
    } else if (sortType === 'weight') {
      this.setState({
        allHogs: this.state.allHogs.sort((hog1, hog2) => hog1.weight > hog2.weight)
      })
    } else {this.setState({allHogs: this.props.allHogs})};
  };

  render() {
    return (
      <div>
        <Selectors pigSorting={this.pigSorting} />
        <PigTiles allHogs={this.state.allHogs} />
      </div>
    )
  }
}
