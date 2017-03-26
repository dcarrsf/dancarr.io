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
  width: 0,
  height: 0,
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
    case types.RESIZE:
      return Object.assign({}, state, { width: action.width, height: action.height });
    default: break;
  }
  return state;
};

export default appReducer;
