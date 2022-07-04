import { ActionType } from '../action-type';
import { Action } from '../actions/index';

const initialState = 'light';

export const userReducer = (state: string = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SWITCH_THEME:
      return state === 'light' ? (state = 'light') : (state = 'dark');
    default:
      return state;
  }
};
