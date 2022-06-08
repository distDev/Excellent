import {storeState} from '../State/store';

export interface IServices {
  title: string;
  img: string;
  price: string;
  id: string;
}

export interface IService {
  img: string;
  rating?: number;
  subcategory?: string;
  category?: string;
  name: string;
  price: string | number;
  id: string;
}

export interface ICartData {
  id: string;
}

export type IRootState = typeof storeState;