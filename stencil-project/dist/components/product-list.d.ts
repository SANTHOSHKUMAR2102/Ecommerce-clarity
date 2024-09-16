import type { Components, JSX } from "../types/components";

interface ProductList extends Components.ProductList, HTMLElement {}
export const ProductList: {
    prototype: ProductList;
    new (): ProductList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
