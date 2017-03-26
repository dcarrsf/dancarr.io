import { describe } from 'tape-plus';
// Action creators and types
import { getScrollChangeAction } from '../../client/jsx/model/actions/creators/app-actions.js';
import { getResizeAction } from '../../client/jsx/model/actions/creators/app-actions.js';
import { SCROLL, RESIZE } from '../../client/jsx/model/actions/action-types.js';

// Fixtures
let expectedAction;

// Run Tests
describe('Actions', it => {

  // --------------------
  // Unit Testing:

  it.group('getScrollChangeAction', test => {

    // Clean up
    test.afterEach(t => {
      expectedAction = null;
    });

    test('it creates a SCROLL action.', (t) => {
      // Fixture
      expectedAction = {
        type: SCROLL,
        position: 0
      }
      // Creates the expected action
      t.deepEqual(getScrollChangeAction(0), expectedAction);
    });

    test('it creates a RESIZE action.', (t) => {
      // Fixture
      expectedAction = {
        type: RESIZE,
        width: 0,
        height: 0
      }
      // Creates the expected action
      t.deepEqual(getResizeAction(0, 0), expectedAction);

      t.comment('---------------');
    });
  });
});
