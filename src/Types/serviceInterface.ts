

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

export interface IServiceList {
  id: string;
  amount: number;
  brand?: string;
  date: string;
  start: string;
  end: string;
  model?: string;
  name?: string;
  phone?: string;
  status: string;
  services: {
    id: string;
    img: string;
    name: string;
    price: string;
  }[];
}




