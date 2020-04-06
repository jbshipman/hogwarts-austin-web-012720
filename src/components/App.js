import React, { Component } from 'react';
import Header from "./Header";
import PigWrapper from './PigWrapper';
// import Selectors from './Selectors';
import "../App.css";
import hogs from "../porkers_data";

// ## Project goals:

// * create an index displaying all hog tiles
// * render each hog name and picture in a tile
// * show the hog's details upon a user's click
// * filter the hogs that are greased
// * sort the hogs based on name
// * sort the hogs based on weight 

// * BONUS: allow users to hide hogs (not delete them, just hide them from view!)
// * BONUS: bring in pig gifs from an API
// * BONUS: implement [Semantic Cards](https://semantic-ui.com/views/card.html) for each hog

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <PigWrapper allHogs={hogs}/>
      </div>
    )
  };
};
