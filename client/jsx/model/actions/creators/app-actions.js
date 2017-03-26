import * as types from '../action-types';

/*
 * action creators
 */

export function getScrollChangeAction(position) {
  return {
    type: types.SCROLL,
    position,
  };
}

export function getResizeAction(width, height) {
  return {
    type: types.RESIZE,
    width,
    height,
  };
}
