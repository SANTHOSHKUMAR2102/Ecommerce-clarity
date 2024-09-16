import { B as BUILD, c as consoleDevInfo, H, d as doc, N as NAMESPACE, p as promiseResolve, b as bootstrapLazy } from './index-c9c44181.js';
export { s as setNonce } from './index-c9c44181.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v4.19.1 | MIT Licensed | https://stenciljs.com
 */
var patchBrowser = () => {
  if (BUILD.isDev && !BUILD.isTesting) {
    consoleDevInfo("Running in development mode.");
  }
  if (BUILD.cloneNodeFix) {
    patchCloneNodeFix(H.prototype);
  }
  const scriptElm = BUILD.scriptDataOpts ? Array.from(doc.querySelectorAll("script")).find(
    (s) => new RegExp(`/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute("data-stencil-namespace") === NAMESPACE
  ) : null;
  const importMeta = import.meta.url;
  const opts = BUILD.scriptDataOpts ? (scriptElm || {})["data-opts"] || {} : {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};
var patchCloneNodeFix = (HTMLElementPrototype) => {
  const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
  HTMLElementPrototype.cloneNode = function(deep) {
    if (this.nodeName === "TEMPLATE") {
      return nativeCloneNodeFn.call(this, deep);
    }
    const clonedNode = nativeCloneNodeFn.call(this, false);
    const srcChildNodes = this.childNodes;
    if (deep) {
      for (let i = 0; i < srcChildNodes.length; i++) {
        if (srcChildNodes[i].nodeType !== 2) {
          clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["app-rout",[[0,"app-rout"]]],["cd-forget",[[1,"cd-forget",{"students":[32]}]]],["cd-rout",[[1,"cd-rout"]]],["ch-about",[[1,"ch-about"]]],["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["admin-dashboard",[[1,"admin-dashboard",{"open":[1540],"product":[1540],"btn":[1540],"userData":[32],"productsList":[32],"editingProductIndex":[32],"editImage":[32]}]]],["admin-login",[[1,"admin-login",{"adminID":[32],"adminPassword":[32],"passwordError":[32]}]]],["admin-signin",[[1,"admin-signin",{"adminName":[32],"mobileNumber":[32],"adminID":[32],"adminPassword":[32],"confirmPassword":[32],"nameError":[32],"mobileNumberError":[32],"adminIdError":[32],"passwordError":[32]}]]],["cd-signin",[[1,"cd-signin",{"userName":[32],"mobileNumber":[32],"userID":[32],"userPassword":[32],"confirmPassword":[32],"nameError":[32],"mobileNumberError":[32],"userIdError":[32],"passwordError":[32]}]]],["ch-login",[[1,"ch-login",{"userID":[32],"userPassword":[32]}]]],["home-page",[[1,"home-page",{"open":[1040]}]]],["product-list",[[1,"product-list",{"productList":[32],"products":[32],"cart":[32]}]]],["shopping-cart",[[1,"shopping-cart",{"open":[1540],"cartItems":[32],"totalAmount":[32],"cartC":[32],"removed":[32]}]]]], options);
});

//# sourceMappingURL=stencil-project.esm.js.map