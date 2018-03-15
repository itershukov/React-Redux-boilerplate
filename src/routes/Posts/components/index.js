/**
 * Created by itersh on 12.03.2018.
 */
import React from 'react';

export default class PostView extends React.Component {
  static propTypes = {
    // test: PropTypes.string
  };

  componentWillMount() {
    this.props.getPosts();
  }

  render() {
    return <div>Posts page!</div>;
  }
}
