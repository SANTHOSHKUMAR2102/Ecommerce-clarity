import { createStore } from '@stencil/store';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
}

const { state, onChange } = createStore<StoreState>({
  cart: [],
});

export { state as store, onChange };
