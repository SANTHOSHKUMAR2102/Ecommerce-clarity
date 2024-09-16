import type { Components, JSX } from "../types/components";

interface AppRout extends Components.AppRout, HTMLElement {}
export const AppRout: {
    prototype: AppRout;
    new (): AppRout;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
