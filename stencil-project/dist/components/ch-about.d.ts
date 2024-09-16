import type { Components, JSX } from "../types/components";

interface ChAbout extends Components.ChAbout, HTMLElement {}
export const ChAbout: {
    prototype: ChAbout;
    new (): ChAbout;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
