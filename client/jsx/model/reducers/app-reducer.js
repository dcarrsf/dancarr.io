import * as types from '../actions/action-types';

// Default State
const initialState = {
  items: [
    {
      label: 'DAN CARR',
      route: '/',
      selected: true
    }, {
      label: 'Code',
      route: '/code',
      selected: false,
    }, {
      label: 'Projects',
      route: '/projects',
      selected: false,
    }, {
      label: 'Publications',
      route: '/publications',
      selected: false,
    }, {
      label: 'Story',
      route: '/story',
      selected: false,
    }
  ],
  scrollOffset: 0,
  selectedIndex: 0,
};

// Helpers
function getIndex(route) {
  const items = initialState.items;
  const length = items.length;
  let index = 0;
  for (let i = 1; i < length; ++i) {
    if (items[i].route === route) {
      index = i;
      break;
    }
  }
  return index;
}

const appReducer = function (state = initialState, action) {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      return Object.assign({}, state, {
        scrollOffset: 0,
        selectedIndex: getIndex(action.payload.pathname),
      });
    case types.SCROLL:
      return Object.assign({}, state, { scrollOffset: action.position });
    default: break;
  }
  return state;
};

export default appReducer;
