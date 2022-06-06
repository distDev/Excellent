import { ActionType } from '../action-type';
import { Action } from '../actions/index';

const cartState: IState[] | [] = [];

interface IState {
  id: string;
  price: string | number;
  img: string;
  name: string;
}

export const cartReducer = (state: IState[] = cartState, action: Action) => {
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
