import { Dispatch } from 'react';
import { ActionType } from '../action-type';
import { Action } from '../actions/index';

const initialState = {
  services: [],
  loading: false,
};

interface IState {
  services: any;
  loading: boolean;
}

export const servcieReducer = (
  state: IState = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.GET_SERVICES:
      return {
        ...state,
        services: action.payload,
      };
    default:
      return state;
  }
};


