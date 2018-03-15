/**
 * Created by itersh on 06.03.2018.
 */
import React from 'react';
import Loadable from 'react-loadable';
// import { SubspaceProvider } from 'react-redux-subspace'

import Loading from '../../components/common/Loading';

const LoadableComponent = Loadable({
  loader: () => import('./containers/index'),
  loading: Loading,
  delay: 300
  // render(loaded, props) {
  //   let Component = loaded.default;
  //   return <SubspaceProvider mapState={state => state || []}>
  //            <Component {...props}/>
  //          </SubspaceProvider>
  // }
});

export default (props, context) => <LoadableComponent />;
