import { IActiveFilters } from '../../Types/serviceInterface';
import { ActionType } from '../action-type';
import { Action } from '../actions/index';

const initialState = {
  category: 'Все категории',
  subcategory: 'Ходовая часть',
};

export const filterReducer = (
  state: IActiveFilters = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.USE_FILTERS:
      return {
        ...state,
        category: action.payload.category,
        subcategory: action.payload.subcategory,
      };

    default:
      return state;
  }
};
