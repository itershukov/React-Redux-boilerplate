/**
 * Created by itersh on 06.03.2018.
 */
import React, { Component } from 'react';

export default class CoreLayout extends Component {
  render() {
    return (
      <div style={{ minHeight: '80vh' }}>
        <h1>Very very important header</h1>
        {this.props.children}
      </div>
    );
  }
}
