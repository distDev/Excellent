export interface ICar {
  id: string;
  model: string;
  brand: string;
  vin?: string;
  year: number;
  milleage?: string;
  user?: string;
}

export interface IUser {
  name: string | null;
  phoneNumber?: string | null;
  id?: string;
}
