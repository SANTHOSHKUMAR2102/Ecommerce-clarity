import type { Components, JSX } from "../types/components";

interface ChLogin extends Components.ChLogin, HTMLElement {}
export const ChLogin: {
    prototype: ChLogin;
    new (): ChLogin;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
