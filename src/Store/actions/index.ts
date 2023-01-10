export interface IGetServices {
  payload: any;
}

export interface IAddToCart {
  id: string;
  price: string | number;
  img: string;
  name: string;
}

export interface IUseFilters {
  category: string;
  subcategory: string;
}

export interface IRemoveFromCart {
  payload: string;
}

export interface IFilteringServices {
  payload: any;
}

export interface ILoginUser {
  id: string;
  phone: string | null;
  name: string | null;
}