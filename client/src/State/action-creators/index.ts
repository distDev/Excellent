import { Dispatch } from 'redux';
import { IRootState, IService } from '../../Types/serviceInterface';
import { ActionType } from '../action-type';
import { Action } from '../actions';

export const getServicesData = (data: any) => {
  return {
    type: ActionType.GET_SERVICES,
    payload: data,
  };
};

export const addServiceToCart = (
  id: string,
  price: string | number,
  img: string,
  name: string
) => {
  return {
    type: ActionType.ADD_TO_CART,
    payload: {
      id,
      price,
      name,
      img,
    },
  };
};

export const removeServiceFromCart = (id: string) => {
  return {
    type: ActionType.REMOVE_FROM_CART,
    payload: id,
  };
};

export const getfilteringServices = (data: any) => {
  return {
    type: ActionType.FILTERING_SERVICES,
    payload: data,
  };
};

export const filterFirvices = (category: string, subcategory: string) => {
  return (dispatch: Dispatch<Action>, getState: IRootState) => {
    let result = getState.services;
    result = result.services.map((e: any) => e.category === category);
    result = result.services.map((e: any) => e.subcategory === subcategory);

    dispatch(getfilteringServices(result));
  };
};
