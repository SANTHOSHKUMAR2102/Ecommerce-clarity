interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}
interface StoreState {
    cart: CartItem[];
}
declare const state: StoreState, onChange: import("@stencil/store/dist/types").OnChangeHandler<StoreState>;
export { state as store, onChange };
