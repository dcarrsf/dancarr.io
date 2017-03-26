import * as types from '../action-types';

/*
 * action creators
 */

export default function getScrollChangeAction(position) {
  return {
    type: types.SCROLL,
    position,
  };
}
