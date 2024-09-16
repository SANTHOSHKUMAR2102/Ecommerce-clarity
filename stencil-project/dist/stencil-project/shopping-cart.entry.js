import { r as registerInstance, h } from './index-c9c44181.js';

const shoppingCartCss = ":host{display:block}.mycart{overflow-y:auto;max-height:80vh}.shopping-cart{position:fixed;top:0;right:-100%;bottom:0;background-color:whitesmoke;z-index:2;transition:0.4s;overflow-y:auto}:host([open]) .shopping-cart{right:0}.shopping-cart{width:300px}.shopping-cart h2{font-size:1.5em;margin:0 0 10px 0;padding:20px;color:white;text-align:center;background-color:grey}.shopping-cart h4{color:green}.shopping-cart ul{list-style:none;padding:0 5px;overflow-y:auto;overflow-x:hidden}.shopping-cart li{display:flex;gap:20px;margin-bottom:10px;align-items:center;position:relative;border-bottom:1px solid #ccc}.shopping-cart img{width:30%}.dlt-btn{padding:5px 10px;font-size:10px;background-color:red;border:0;border-radius:5px;color:white;position:absolute;top:0;right:0}.shopping-cart .empty-line{text-align:center}.t-box{padding:0 10px 5px}.t-box button{padding:10px 20px;background-color:#28a745;border:0;color:white}.t-box button:hover{background-color:#177e2f}.close-btn{position:absolute;top:0;border:0;padding-top:3px;background-color:transparent;cursor:pointer}.close-btn:hover{background-color:rgb(161, 161, 161)}.open-buttno{position:absolute}nav{display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid;border-color:#ccc;background-color:white;position:fixed;top:0;right:0;left:0;z-index:1;padding:0 20px}.nav-details{display:flex;gap:20px;align-items:center}.cart-tag{align-items:center;margin-right:30px;background-color:whitesmoke;padding:8px 10px;border-radius:20px}.cart-tag:hover{background-color:rgb(219, 219, 219)}.cart-tag span{background-color:black;color:white;padding:2px 5px;border-radius:20px}.cart-tag img{width:20px}.close-cart{position:absolute}";

const ShoppingCart = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cartItems = [];
        this.totalAmount = 0;
        this.cartC = 0;
        this.open = undefined;
        this.removed = false;
    }
    componentWillLoad() {
        this.getCartData();
        window.addEventListener('listenAdded', this.getCartData.bind(this));
    }
    disconnectedCallback() {
        window.removeEventListener('listenAdded', this.getCartData.bind(this));
    }
    closeCard() {
        this.open = false;
    }
    openCard() {
        if (!this.open) {
            this.open = true;
        }
    }
    getCartData() {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            this.cartItems = JSON.parse(cartData) || [];
        }
        else {
            this.cartItems = [];
        }
        this.calculateTotalAmount();
        this.cartCount();
    }
    calculateTotalAmount() {
        this.totalAmount = this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }
    cartCount() {
        this.cartC = this.cartItems.reduce((total, item) => total + item.quantity, 0);
    }
    removeCartItem(index) {
        this.cartItems.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(this.cartItems));
        this.calculateTotalAmount();
        this.cartCount();
    }
    render() {
        return (h("aside", { key: '6310edaaf733ba91e61584f9f68e83e5d0c2e709' }, h("header", { key: '3d4798f985640fbf0b7f52681dd77f62f8bdf8da' }, h("nav", { key: '679118976d2be577b60807bb315b196184a6e198' }, h("h1", { key: '6e9d31573d1a6faf0740dd96b357d9d822d1cc75' }, "Clarity"), h("div", { key: 'ca7f157f6f576843d58e1035792c6e39db3c86d1', class: "nav-details" }, h("p", { key: '94c48039f9e99f71f1652dcb134ccee1936a2406', class: "cart-tag", onClick: this.openCard.bind(this) }, h("img", { key: '7c008a0efef2b8736a229c99234e12d057b1b6e6', src: "/assets/cartlogo.png", alt: "" }), " Cart ", h("span", { key: 'eba3f93c0b45181044dd800f54fb6f5512a4caa4' }, this.cartC)), h("p", { key: '5b65934313f8b5938a92b0ab827bdc030b1b8931' }, "About"), h("a", { key: '525fa930795054a0ccb8a4609ff99759095797b3', href: "/login" }, "Logout")))), h("div", { key: '81d4c57bf8911108202ec18121b2ac6fe0c98a50', class: "mycart" }, h("div", { key: '2620b1b0e2d0f74d0e040fccf3e0858ca246a52f', class: "shopping-cart" }, h("h2", { key: 'c9696104e031154e5b9ee21d5929d7025c689547' }, "Shopping Cart"), h("button", { key: '8f471e5577f1e73226210dada35ade3f51529619', class: "close-btn", onClick: this.closeCard.bind(this) }, "X"), this.cartItems.length === 0 ? (h("p", { class: "empty-line" }, "Your cart is empty!!")) : (h("ul", null, this.cartItems.map(item => (h("li", null, h("img", { src: item.image, alt: item.name }), h("div", null, h("h5", { class: "p-name" }, item.name), h("h4", { class: "p-price" }, "\u20B9", item.price.toFixed(2)), h("h5", { class: "p-qty" }, "Quantity : ", item.quantity)), h("button", { class: "dlt-btn", onClick: this.removeCartItem.bind(this) }, "Remove")))))), h("div", { key: '14ee2c2ec84f5ba7c822a299bd5e39601221c2df', class: "t-box" }, h("p", { key: '423030e92a7784c5eea61c9d01d028c659b59080', class: "total" }, "Total : \u20B9", this.totalAmount.toFixed(2)), h("button", { key: 'ec11c15c94de0541e59c2fad4edbc4dcb7b95d5e', class: "buy-btn" }, "BUY"))))));
    }
};
ShoppingCart.style = shoppingCartCss;

export { ShoppingCart as shopping_cart };

//# sourceMappingURL=shopping-cart.entry.js.map