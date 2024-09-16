import { r as registerInstance, i as createEvent, h } from './index-c9c44181.js';

const productListCss = ":host{display:block}.product-list{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:20px;margin-top:100px}.product{border:1px solid #ccc;padding:10px;text-align:center}.product img{width:100%;height:250px;object-fit:contain;transition:0.5s}.img-container{overflow:hidden}.img-container:hover img{transform:scale(1.2)}.product:hover{background-color:rgb(219, 219, 219)}.product h2{font-size:1.2em;margin:10px 0}.product p{color:#333}.product button{background-color:#28a745;color:#fff;border:none;padding:10px 20px;cursor:pointer}.product button:hover{background-color:#218838}";

const ProductList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.listenAdded = createEvent(this, "listenAdded", 7);
        this.productList = [];
        this.products = [
            { id: 1, name: 'Product 1', price: 2999, image: '/assets/img2.jpg' },
            { id: 2, name: 'Product 2', price: 1999, image: '/assets/img3.jpg' },
            { id: 3, name: 'Product 3', price: 799, image: '/assets/img4.webp' },
            { id: 4, name: 'Product 4', price: 1250, image: '/assets/img5.jpg' },
            { id: 5, name: 'Product 5', price: 299, image: '/assets/img6.webp' },
            { id: 6, name: 'Product 6', price: 999, image: '/assets/img7.webp' },
            { id: 7, name: 'Product 7', price: 1099, image: '/assets/MQTQ3.jfif' },
            { id: 8, name: 'Product 8', price: 3999, image: '/assets/img3.jpg' },
        ];
        this.cart = [];
    }
    componentWillLoad() {
        this.productList = this.getProductsFromLocalStorage();
        this.cart = this.getCartFromLocalStorage();
        this.storeProductsInLocalStorage(this.products);
    }
    getProductsFromLocalStorage() {
        try {
            const data = localStorage.getItem('productsList');
            if (data) {
                return JSON.parse(data);
            }
            else {
                console.log('No product data found in local storage.');
                return [];
            }
        }
        catch (error) {
            console.error('Error retrieving products from local storage:', error);
            return [];
        }
    }
    getCartFromLocalStorage() {
        try {
            const data = localStorage.getItem('cart');
            if (data) {
                return JSON.parse(data);
            }
            else {
                console.log('No cart data found in local storage.');
                return [];
            }
        }
        catch (error) {
            console.error('Error retrieving cart from local storage:', error);
            return [];
        }
    }
    storeProductsInLocalStorage(products) {
        localStorage.setItem('productsList', JSON.stringify(products));
    }
    addToCart(product) {
        const existingProductIndex = this.cart.findIndex(item => item.id === product.id);
        if (existingProductIndex !== -1) {
            this.cart = this.cart.map((item, index) => index === existingProductIndex ? Object.assign(Object.assign({}, item), { quantity: item.quantity + 1 }) : item);
        }
        else {
            this.cart = [...this.cart, Object.assign(Object.assign({}, product), { quantity: 1 })];
        }
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.listenAdded.emit(product);
    }
    render() {
        return (h("div", { key: 'aef733f0f5c6898d0ffce8f766369371b9bfe088', class: "product-list" }, this.productList.map(product => (h("div", { class: "product", key: product.id }, h("div", { class: "img-container" }, h("img", { src: product.image, alt: product.name })), h("h2", null, product.name), h("p", null, "\u20B9", product.price.toFixed(2)), h("button", { onClick: () => this.addToCart(product) }, "Add to Cart"))))));
    }
};
ProductList.style = productListCss;

export { ProductList as product_list };

//# sourceMappingURL=product-list.entry.js.map