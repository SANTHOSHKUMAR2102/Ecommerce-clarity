import { EventEmitter } from '../../stencil-public-runtime';
interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity?: number;
}
export declare class ProductList {
    productList: Product[];
    products: Product[];
    listenAdded: EventEmitter;
    cart: Product[];
    componentWillLoad(): void;
    getProductsFromLocalStorage(): Product[];
    getCartFromLocalStorage(): Product[];
    storeProductsInLocalStorage(products: Product[]): void;
    addToCart(product: Product): void;
    render(): any;
}
export {};
