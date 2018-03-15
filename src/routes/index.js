/**
 * Created by itersh on 06.03.2018.
 */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home/index';
import Users from './Users/index';
import Posts from './Posts/index';

export default class AppRouter extends Component {
  static propTypes = {
    // store: PropTypes.object.isRequired,
    // routes: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/posts" component={Posts} />
      </div>
    );
  }
}
