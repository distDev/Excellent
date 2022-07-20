import { ActionType } from '../action-type';
import { Action } from '../actions/index';

const initialState = {
  authModal: {
    isOpen: false,
  },
};

interface IState {
  authModal: {
    isOpen: boolean;
  };
}

export const modalReducer = (state: IState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CHANGE_AUTH_MODAL:
      return {
        ...state,
        authModal: {
          isOpen: !state.authModal.isOpen,
        },
      };
    default:
      return state;
  }
};
