import { ActionType } from "../action-type";

export interface IGetServices {
    type: ActionType.GET_SERVICES,
    payload: any;
}

export interface IAddToCart {
  type: ActionType.GET_SERVICES;
  payload: string;
}


export type Action = IGetServices;