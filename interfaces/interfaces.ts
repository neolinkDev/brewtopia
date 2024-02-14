
export type ID = number;

export interface CartItem {
  id: ID;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export interface QuantityUpdate {
  id: ID;
  quantity: number;
}