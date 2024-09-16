import type { Components, JSX } from "../types/components";

interface ShoppingCart extends Components.ShoppingCart, HTMLElement {}
export const ShoppingCart: {
    prototype: ShoppingCart;
    new (): ShoppingCart;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
