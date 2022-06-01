import { Dispatch } from 'redux';
import { ActionType } from '../action-type';

const getServicesData = (data: any) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ActionType.GET_SERVICES,
      payload: data,
    });
  };
};
