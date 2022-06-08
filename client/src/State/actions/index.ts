import { IService } from '../../Types/serviceInterface';
import { ActionType } from '../action-type';

export interface IGetServices {
  type: ActionType.GET_SERVICES;
  payload: any;
}

export interface IAddToCart {
  type: ActionType.ADD_TO_CART;
  payload: {
    id: string;
    price: string;
    img: string;
    name: string;
  };
}

export interface IRemoveFromCart {
  type: ActionType.REMOVE_FROM_CART;
  payload: string;
}

export interface IFilteringServices {
  type: ActionType.FILTERING_SERVICES;
  payload: any;
}

export type Action = IGetServices | IAddToCart | IRemoveFromCart | IFilteringServices;
