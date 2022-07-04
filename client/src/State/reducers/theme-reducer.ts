import { ActionType } from '../action-type';
import { Action } from '../actions/index';

const initialState = 'light';

export const themeReducer = (state: string = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SWITCH_THEME:
      return state === 'light' ? (state = 'dark') : (state = 'light');
    default:
      return state;
  }
};
