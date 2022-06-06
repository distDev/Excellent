import { ActionType } from '../action-type';

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
