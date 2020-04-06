import React, { Component } from 'react';

class PigCard extends Component {
  constructor() {
    super()
    // console.log(this)
    this.state = {
      showDetails: false
    };
  };

  componentDidMount() {
    // console.log(this.props);
  };

  // (/\s/)
  getImage(pigName) {
    let formattedName = pigName.split(' ').join('_').toLowerCase();
    let pigPicture = `../../hog-imgs/${formattedName}.jpg`;
    return pigPicture;
  };

  showTheDetails() {
    console.log(this);
    // e.preventDefault();
    this.setState({showDetails: !this.state.showDetails});
    // const isClicked = this.state.showDetails;
    // console.log(e);
  };

  render() {
    // console.log(this.showTheDetails);
    return (
      <div>
        <div onClick={this.showTheDetails}>
          <h1>{this.props.pig.name}</h1>
          <img src={this.getImage(this.props.pig.name)} alt='images of pigs' ></img>
          {this.state.showDetails ?
            <div className='details'>
              <div>Specialty: {this.props.pig.specialty}</div>
              <div>Greased: {this.props.pig.greased ? 'yes' : 'no'}</div>
              <div>Weight: {this.props.pig.weight}</div>
              <div>Highest medal achieved: {this.props.pig['highest medal achieved']}</div>
            </div> : null}
        </div>
      </div>
    )
  }
};

export default PigCard;