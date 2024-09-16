import type { Components, JSX } from "../types/components";

interface AdminSignin extends Components.AdminSignin, HTMLElement {}
export const AdminSignin: {
    prototype: AdminSignin;
    new (): AdminSignin;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
