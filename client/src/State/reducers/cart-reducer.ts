import { IService } from '../../Types/serviceInterface';
import { ActionType } from '../action-type';
import { Action } from '../actions/index';

const cartState: IService[] | [] = [];


export const cartReducer = (state: IService[] = cartState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_TO_CART:
      return [
        ...state,
        {
          id: action.payload.id,
          price: action.payload.price,
          img: action.payload.img,
          name: action.payload.name,
        },
      ];
    case ActionType.REMOVE_FROM_CART:
      return state.filter((e) => e.id !== action.payload);
    default:
      return state;
  }
};
