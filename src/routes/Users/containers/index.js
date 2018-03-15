/**
 * Created by itersh on 14.03.2018.
 */
import { connect } from 'react-redux';
import { withReducer } from 'react-redux-dynamic-reducer';

import View from '../components';
import {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser
} from '../../../actions/users';
import Reducer from '../reducers';

export const getFriendList = (users = []) => {
  return users.filter(u => Math.random() > 0.5);
};

const mapDispatchToProps = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser
};

const mapStateToProps = state => {
  return {
    friends: state.users ? getFriendList(state.users.list) : [],
    users: state.users ? state.users.list : [],
    error: state.users ? state.users.error : {},
    inProcess: state.users ? state.users.inProcess : false
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withReducer(Reducer, 'users', { namespaceActions: false })(View)
);
