import { createStore, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers
import appReducer from './reducers/app-reducer';

// Combine Reducers (divide state)
const reducers = combineReducers({
  appState: appReducer,
  routing: routerReducer
});

// Create store
/* eslint-disable no-underscore-dangle */
const store = createStore(reducers);
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
/* eslint-enable */

export default store;
