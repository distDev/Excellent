import { storeState } from '../State/store';

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

export interface IActiveFilters {
  category: string;
  subcategory: string;
}

export interface IRootState {
  services:
    | {
        services: any;
        filteredServices: IService[];
      }
    | {
        filteredServices: any;
        services: IService[];
      };
  cart: IService[];
  filters: {
    category: string;
    subcategory: string;
  };
  user: {
    id: string;
    phoneNumber: string | null;
  };
}

export type TRootState = typeof storeState;
