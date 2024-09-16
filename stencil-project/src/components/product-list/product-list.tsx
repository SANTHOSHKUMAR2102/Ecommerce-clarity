import { Component, h, State, Event, EventEmitter } from '@stencil/core';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

@Component({
  tag: 'product-list',
  styleUrl: 'product-list.css',
  shadow: true,
})
export class ProductList {

  @State() productList: Product[] = [];
  @State() products: Product[] = [
  { id: 1, name: 'Product 1', price: 2999, image: '/assets/img2.jpg' },
  { id: 2, name: 'Product 2', price: 1999, image: '/assets/img3.jpg' },
  { id: 3, name: 'Product 3', price: 799, image: '/assets/img4.webp' },
  { id: 4, name: 'Product 4', price: 1250, image: '/assets/img5.jpg' },
  { id: 5, name: 'Product 5', price: 299, image: '/assets/img6.webp' },
  { id: 6, name: 'Product 6', price: 999, image: '/assets/img7.webp' },
  { id: 7, name: 'Product 7', price: 1099, image: '/assets/MQTQ3.jfif' },
  { id: 8, name: 'Product 8', price: 3999, image: '/assets/img3.jpg' },
  ];

  @Event() listenAdded: EventEmitter;

  @State() cart: Product[] = [];

  componentWillLoad() {
    this.productList = this.getProductsFromLocalStorage();
    this.cart = this.getCartFromLocalStorage();
    this.storeProductsInLocalStorage(this.products);
  }
  

  getProductsFromLocalStorage(): Product[] {
    try {
      const data = localStorage.getItem('productsList');
      if (data) {
        return JSON.parse(data);
      } else {
        console.log('No product data found in local storage.');
        return [];
      }
    } catch (error) {
      console.error('Error retrieving products from local storage:', error);
      return [];
    }
  }

  getCartFromLocalStorage(): Product[] {
    try {
      const data = localStorage.getItem('cart');
      if (data) {
        return JSON.parse(data);
      } else {
        console.log('No cart data found in local storage.');
        return [];
      }
    } catch (error) {
      console.error('Error retrieving cart from local storage:', error);
      return [];
    }
  }

  storeProductsInLocalStorage(products: Product[]): void {
    localStorage.setItem('productsList', JSON.stringify(products));
  }

  
    
  

  addToCart(product: Product): void {
    const existingProductIndex = this.cart.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      this.cart = this.cart.map((item, index) =>
        index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      this.cart = [...this.cart, { ...product, quantity: 1 }];
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.listenAdded.emit(product);
  }

  render() {
    return (
      <div class="product-list">
        {this.productList.map(product => (
          <div class="product" key={product.id}>
            <div class="img-container">
              <img src={product.image} alt={product.name} />
            </div>
            <h2>{product.name}</h2>
            <p>₹{product.price.toFixed(2)}</p>
            <button onClick={() => this.addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    );
  }
}
