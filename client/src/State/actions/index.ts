import { ActionType } from "../action-type";

interface IGetServices {
    type: ActionType.GET_SERVICES,
    payload: any;
}


export type Action = IGetServices;