import { ActionType } from '../action-type';
import { Action } from '../actions/index';

const initialState = null;

export const userReducer = (state: any = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.LOGIN_USER:
      return (state = {
        id: action.payload.id,
        phoneNumber: action.payload.phone
      });
    case ActionType.LOGOUT_USER:
      return (state = '');
    default:
      return state;
  }
};
