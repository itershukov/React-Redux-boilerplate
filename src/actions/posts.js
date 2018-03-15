/**
 * Created by itersh on 07.03.2018.
 */
export const types = { post: 'post' };

export const getPosts = () => (dispatch, getState) =>
  dispatch({ type: 'POSTS_GET_START' });

export const getPost = id => (dispatch, getState) =>
  dispatch({ type: 'POST_GET_START', payload: id });

export const deletePost = id => (dispatch, getState) =>
  dispatch({ type: 'POST_DELETE_START', payload: id });

export const createPost = data => (dispatch, getState) =>
  dispatch({ type: 'POST_POST_START', payload: data });

export const updatePost = data => (dispatch, getState) =>
  dispatch({ type: 'POST_PUT_START', payload: data });
