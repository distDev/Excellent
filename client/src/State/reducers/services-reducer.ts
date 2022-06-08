import { IService } from '../../Types/serviceInterface';
import { ActionType } from '../action-type';
import { Action } from '../actions/index';

const initialState: IState = {
  services: [],
  filteredServices: [],
  loading: false,
};

interface IState {
  services: IService[];
  filteredServices: IService[];
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
    case ActionType.FILTERING_SERVICES:
      return {
        ...state,
        filteredServices: action.payload,
      };
    default:
      return state;
  }
};
