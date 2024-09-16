import type { Components, JSX } from "../types/components";

interface CdSignin extends Components.CdSignin, HTMLElement {}
export const CdSignin: {
    prototype: CdSignin;
    new (): CdSignin;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
