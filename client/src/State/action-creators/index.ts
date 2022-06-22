import { collection, getDocs } from 'firebase/firestore';
import { Dispatch } from 'redux';
import { db } from '../../Firebase/firebase-config';
import { ActionType } from '../action-type';
import { Action } from '../actions';

export const getServicesData = (data: any) => {
  return {
    type: ActionType.GET_SERVICES,
    payload: data,
  };
};

// добавление в корзину
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

// удаление из корзины
export const removeServiceFromCart = (id: string) => {
  return {
    type: ActionType.REMOVE_FROM_CART,
    payload: id,
  };
};

// фильтрованные услуги
export const filteredServicesData = (data: any) => {
  return {
    type: ActionType.FILTERING_SERVICES,
    payload: data,
  };
};

// добавление в store выбранных фильтров
export const activeFilters = (category: string, subcategory: string) => {
  return {
    type: ActionType.USE_FILTERS,
    payload: {
      category,
      subcategory,
    },
  };
};

// авторизация пользователя
export const loginUser = (id: string, phone: string | null) => {
  return {
    type: ActionType.LOGIN_USER,
    payload: {
      id,
      phone,
    },
  };
};

export const logoutUser = () => {
  return {
    type: ActionType.LOGOUT_USER,
  };
};

// получение услуг из firebase
export const fetchServices = (category: string, subcategory: string) => {
  return async (dispatch: Dispatch<Action>) => {
    const servicesCollectionRef = collection(db, 'services');
    const data = await getDocs(servicesCollectionRef);
    const initialData: any = data?.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    // фильтрация данных
    let filteredData = initialData;
    filteredData =
      category === ''
        ? filteredData
        : filteredData.filter((e: any) => e.category === category);
    filteredData =
      subcategory === ''
        ? filteredData
        : filteredData.filter((e: any) => e.subcategory === subcategory);

    dispatch(getServicesData(initialData));
    dispatch(filteredServicesData(filteredData));
  };
};
