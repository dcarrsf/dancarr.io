import { describe } from 'tape-plus';
// Reducers and types
import appReducer from '../../client/jsx/model/reducers/app-reducer.js';
import { SCROLL, RESIZE } from '../../client/jsx/model/actions/action-types.js';

// Fixtures
let expectedResult;

// Run Tests
describe('Reducers', it => {

  // --------------------
  // Unit Testing:

  it.group('appReducer', test => {

    // Clean up
    test.afterEach(t => {
      expectedResult = null;
    });

    // Test: Reducers
    test('it returns the initial state.', (t) => {
      // Fixture
      expectedResult = {
        width: 0,
        height: 0,
        selectedIndex: 0,
        scrollOffset: 0,
        items: [
          {
            label: 'DAN CARR',
            route: '/',
            selected: true
          }, {
            label: 'Code',
            labelShort: 'Code',
            icon: 'pencil',
            route: '/code',
            selected: false,
          }, {
            label: 'Projects',
            labelShort: 'Proj.',
            icon: 'folder-open',
            route: '/projects',
            selected: false,
          }, {
            label: 'Publications',
            labelShort: 'Pub.',
            icon: 'bookmark',
            route: '/publications',
            selected: false,
          }, {
            label: 'Story',
            labelShort: 'Story',
            icon: 'leaf',
            route: '/story',
            selected: false,
          }
        ],
      }
      // Creates the expected result?
      t.deepEqual(appReducer(undefined, {}), expectedResult);
    });

    test('it updates the scrollOffset, width, and height when called.', (t) => {
      // Fixtures
      let state = {
        scrollOffset: 0,
      }
      expectedResult = {
        scrollOffset: 300,
      }
      // Creates the expected result?
      t.deepEqual(appReducer(state, { type: SCROLL, position: 300 }), expectedResult);
      
      state = {
        width: 0,
        height: 0,
      }
      expectedResult = {
        width: 1200,
        height: 768,
      }
      t.deepEqual(appReducer(state, { type: RESIZE, width: 1200, height: 768 }), expectedResult);

      t.comment('---------------');
    });
  });
});
