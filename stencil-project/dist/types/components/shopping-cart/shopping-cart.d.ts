interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity?: number;
}
export declare class ShoppingCart {
    cartItems: Product[];
    totalAmount: number;
    cartC: number;
    open: boolean;
    removed: boolean;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    closeCard(): void;
    openCard(): void;
    getCartData(): void;
    calculateTotalAmount(): void;
    cartCount(): void;
    removeCartItem(index: number): void;
    render(): any;
}
export {};
