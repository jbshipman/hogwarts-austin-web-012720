import React, { Component } from 'react';
import piggy from "../porco.png";

export default class Nav extends Component {
  render() {
    return (
      <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
    </div>
    )
  };
};
