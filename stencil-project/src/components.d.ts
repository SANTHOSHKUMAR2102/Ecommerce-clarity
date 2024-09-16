/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AdminDashboard {
        "btn": boolean;
        "open": boolean;
        "product": boolean;
    }
    interface AdminLogin {
    }
    interface AdminSignin {
    }
    interface AppRout {
    }
    interface CdForget {
    }
    interface CdRout {
    }
    interface CdSignin {
    }
    interface ChAbout {
    }
    interface ChLogin {
    }
    interface HomePage {
        "open": Boolean;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface ProductList {
    }
    interface ShoppingCart {
        "open": boolean;
    }
}
export interface ProductListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLProductListElement;
}
declare global {
    interface HTMLAdminDashboardElement extends Components.AdminDashboard, HTMLStencilElement {
    }
    var HTMLAdminDashboardElement: {
        prototype: HTMLAdminDashboardElement;
        new (): HTMLAdminDashboardElement;
    };
    interface HTMLAdminLoginElement extends Components.AdminLogin, HTMLStencilElement {
    }
    var HTMLAdminLoginElement: {
        prototype: HTMLAdminLoginElement;
        new (): HTMLAdminLoginElement;
    };
    interface HTMLAdminSigninElement extends Components.AdminSignin, HTMLStencilElement {
    }
    var HTMLAdminSigninElement: {
        prototype: HTMLAdminSigninElement;
        new (): HTMLAdminSigninElement;
    };
    interface HTMLAppRoutElement extends Components.AppRout, HTMLStencilElement {
    }
    var HTMLAppRoutElement: {
        prototype: HTMLAppRoutElement;
        new (): HTMLAppRoutElement;
    };
    interface HTMLCdForgetElement extends Components.CdForget, HTMLStencilElement {
    }
    var HTMLCdForgetElement: {
        prototype: HTMLCdForgetElement;
        new (): HTMLCdForgetElement;
    };
    interface HTMLCdRoutElement extends Components.CdRout, HTMLStencilElement {
    }
    var HTMLCdRoutElement: {
        prototype: HTMLCdRoutElement;
        new (): HTMLCdRoutElement;
    };
    interface HTMLCdSigninElement extends Components.CdSignin, HTMLStencilElement {
    }
    var HTMLCdSigninElement: {
        prototype: HTMLCdSigninElement;
        new (): HTMLCdSigninElement;
    };
    interface HTMLChAboutElement extends Components.ChAbout, HTMLStencilElement {
    }
    var HTMLChAboutElement: {
        prototype: HTMLChAboutElement;
        new (): HTMLChAboutElement;
    };
    interface HTMLChLoginElement extends Components.ChLogin, HTMLStencilElement {
    }
    var HTMLChLoginElement: {
        prototype: HTMLChLoginElement;
        new (): HTMLChLoginElement;
    };
    interface HTMLHomePageElement extends Components.HomePage, HTMLStencilElement {
    }
    var HTMLHomePageElement: {
        prototype: HTMLHomePageElement;
        new (): HTMLHomePageElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLProductListElementEventMap {
        "listenAdded": any;
    }
    interface HTMLProductListElement extends Components.ProductList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLProductListElementEventMap>(type: K, listener: (this: HTMLProductListElement, ev: ProductListCustomEvent<HTMLProductListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLProductListElementEventMap>(type: K, listener: (this: HTMLProductListElement, ev: ProductListCustomEvent<HTMLProductListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLProductListElement: {
        prototype: HTMLProductListElement;
        new (): HTMLProductListElement;
    };
    interface HTMLShoppingCartElement extends Components.ShoppingCart, HTMLStencilElement {
    }
    var HTMLShoppingCartElement: {
        prototype: HTMLShoppingCartElement;
        new (): HTMLShoppingCartElement;
    };
    interface HTMLElementTagNameMap {
        "admin-dashboard": HTMLAdminDashboardElement;
        "admin-login": HTMLAdminLoginElement;
        "admin-signin": HTMLAdminSigninElement;
        "app-rout": HTMLAppRoutElement;
        "cd-forget": HTMLCdForgetElement;
        "cd-rout": HTMLCdRoutElement;
        "cd-signin": HTMLCdSigninElement;
        "ch-about": HTMLChAboutElement;
        "ch-login": HTMLChLoginElement;
        "home-page": HTMLHomePageElement;
        "my-component": HTMLMyComponentElement;
        "product-list": HTMLProductListElement;
        "shopping-cart": HTMLShoppingCartElement;
    }
}
declare namespace LocalJSX {
    interface AdminDashboard {
        "btn"?: boolean;
        "open"?: boolean;
        "product"?: boolean;
    }
    interface AdminLogin {
    }
    interface AdminSignin {
    }
    interface AppRout {
    }
    interface CdForget {
    }
    interface CdRout {
    }
    interface CdSignin {
    }
    interface ChAbout {
    }
    interface ChLogin {
    }
    interface HomePage {
        "open"?: Boolean;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface ProductList {
        "onListenAdded"?: (event: ProductListCustomEvent<any>) => void;
    }
    interface ShoppingCart {
        "open"?: boolean;
    }
    interface IntrinsicElements {
        "admin-dashboard": AdminDashboard;
        "admin-login": AdminLogin;
        "admin-signin": AdminSignin;
        "app-rout": AppRout;
        "cd-forget": CdForget;
        "cd-rout": CdRout;
        "cd-signin": CdSignin;
        "ch-about": ChAbout;
        "ch-login": ChLogin;
        "home-page": HomePage;
        "my-component": MyComponent;
        "product-list": ProductList;
        "shopping-cart": ShoppingCart;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "admin-dashboard": LocalJSX.AdminDashboard & JSXBase.HTMLAttributes<HTMLAdminDashboardElement>;
            "admin-login": LocalJSX.AdminLogin & JSXBase.HTMLAttributes<HTMLAdminLoginElement>;
            "admin-signin": LocalJSX.AdminSignin & JSXBase.HTMLAttributes<HTMLAdminSigninElement>;
            "app-rout": LocalJSX.AppRout & JSXBase.HTMLAttributes<HTMLAppRoutElement>;
            "cd-forget": LocalJSX.CdForget & JSXBase.HTMLAttributes<HTMLCdForgetElement>;
            "cd-rout": LocalJSX.CdRout & JSXBase.HTMLAttributes<HTMLCdRoutElement>;
            "cd-signin": LocalJSX.CdSignin & JSXBase.HTMLAttributes<HTMLCdSigninElement>;
            "ch-about": LocalJSX.ChAbout & JSXBase.HTMLAttributes<HTMLChAboutElement>;
            "ch-login": LocalJSX.ChLogin & JSXBase.HTMLAttributes<HTMLChLoginElement>;
            "home-page": LocalJSX.HomePage & JSXBase.HTMLAttributes<HTMLHomePageElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "product-list": LocalJSX.ProductList & JSXBase.HTMLAttributes<HTMLProductListElement>;
            "shopping-cart": LocalJSX.ShoppingCart & JSXBase.HTMLAttributes<HTMLShoppingCartElement>;
        }
    }
}
