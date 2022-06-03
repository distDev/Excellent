import { ActionType } from '../action-type';


export const getServicesData = (data: any) => {
  return {
    type: ActionType.GET_SERVICES,
    payload: data,
  };
};

export const addServiceToCart = (id: string) => {
  return {
    type: ActionType.GET_SERVICES,
    payload: id,
  };
};
