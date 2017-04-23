import * as types from '../actions/action-types';

// Default State
const initialState = {
  logo: {
    label: 'DAN CARR',
    route: '/',
    selected: true
  },
  menu: [
    {
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
  sidebarShowing: false,
};

// Helpers
function getIndex(route) {
  if (route === '/') {
    return -1;
  }
  const items = initialState.menu;
  const length = items.length;
  let index = -1;
  for (let i = 0; i < length; ++i) {
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
    case types.SIDEBAR_CHANGE:
      return Object.assign({}, state, { sidebarShowing: action.sidebarShowing });
    default: break;
  }
  return state;
};

export default appReducer;
