import { describe } from 'tape-plus';
// Store and Reducers
import store from '../../client/jsx/model/store.js';
import appReducer from '../../client/jsx/model/reducers/app-reducer.js';

// Run Tests
describe('Store', it => {

  // --------------------
  // Unit Testing:

  it.group('combineReducers', test => {

    test('it contains an appState object.', (t) => {
      // Set initial state
      appReducer(undefined, {});
      // Creates the expected state
      const state = store.getState();
      // Test: state exists?
      t.equal(state.appState !== undefined, true);

      t.comment('---------------');
    });
  });
});
