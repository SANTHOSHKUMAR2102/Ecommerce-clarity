import type { Components, JSX } from "../types/components";

interface CdRout extends Components.CdRout, HTMLElement {}
export const CdRout: {
    prototype: CdRout;
    new (): CdRout;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
