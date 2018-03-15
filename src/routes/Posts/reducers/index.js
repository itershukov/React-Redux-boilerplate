/**
 * Created by itersh on 06.03.2018.
 */
import { buildCRUDActionHandlers } from '../../../helpers/actionHandlerFactory';
import { types } from '../../../actions/posts';
// ------------------------------------
// Action Handlers
// ------------------------------------
const objectTypes = Object.keys(types).map(key => types[key]);
//default
const namespace = 'posts';
let ACTION_HANDLERS = buildCRUDActionHandlers(namespace, objectTypes);
//custom

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  list: []
};
export default function Reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
