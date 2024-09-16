import type { Components, JSX } from "../types/components";

interface CdForget extends Components.CdForget, HTMLElement {}
export const CdForget: {
    prototype: CdForget;
    new (): CdForget;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
