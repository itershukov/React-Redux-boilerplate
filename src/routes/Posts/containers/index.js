/**
 * Created by itersh on 14.03.2018.
 */
import { connect } from 'react-redux';
import { withReducer } from 'react-redux-dynamic-reducer';

import View from '../components';
import {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost
} from '../../../actions/posts';
import Reducer from '../reducers';

export const getMyPosts = (posts = []) => {
  return posts.filter(u => Math.random() > 0.2);
};

const mapDispatchToProps = {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost
};

const mapStateToProps = state => {
  return {
    myPosts: state.posts ? getMyPosts(state.posts.list) : [],
    posts: state.posts ? state.posts.list : [],
    error: state.posts ? state.posts.error : {},
    inProcess: state.posts ? state.posts.inProcess : false
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(
  withReducer(Reducer, 'posts', { namespaceActions: false })(View)
);
