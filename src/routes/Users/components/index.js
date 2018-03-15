/**
 * Created by itersh on 12.03.2018.
 */
import React from 'react';

export default class UserView extends React.Component {
  static propTypes = {
    // test: PropTypes.string
  };

  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    return <div>Users page!</div>;
  }
}
