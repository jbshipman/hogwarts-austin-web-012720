import React, { Component } from 'react';

export default class Selectors extends Component {
  render() {
    return (
      <div>
        <select onChange={(e) => this.props.pigSorting(e)}>
          <option value='all'>All</option>
          <option value='name'>Name</option>
          <option value='weight'>Weight</option>
        </select>
      </div>
    )
  }
}
