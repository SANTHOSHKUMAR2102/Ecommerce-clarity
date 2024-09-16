import { Component, h, Prop, State } from '@stencil/core';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

@Component({
  tag: 'shopping-cart',
  styleUrl: 'shopping-cart.css',
  shadow: true,
})
export class ShoppingCart {
  @State() cartItems: Product[] = [];
  @State() totalAmount = 0;
  @State() cartC = 0;

  @Prop({ reflect: true, mutable: true }) open: boolean;

  @State() removed:boolean=false;


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



  getCartData(){
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cartItems = JSON.parse(cartData) || [];
    } else {
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

  removeCartItem(index: number) {
    this.cartItems.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(this.cartItems));
    this.calculateTotalAmount();
    this.cartCount();
  }
  
  
  

  render() {
    return (
      <aside>
        <header>
          <nav>
            <h1>Clarity</h1>
            <div class="nav-details">
              <p class="cart-tag" onClick={this.openCard.bind(this)}>
                <img src="/assets/cartlogo.png" alt="" /> Cart <span>{this.cartC}</span>
              </p>
              <p>About</p>
              <a href="/login">Logout</a>
            </div>
          </nav>
        </header>
        <div class="mycart">
          <div class="shopping-cart">
            <h2>Shopping Cart</h2>
            <button class="close-btn" onClick={this.closeCard.bind(this)}>
              X
            </button>
            {this.cartItems.length === 0 ? (
              <p class="empty-line">Your cart is empty!!</p>
            ) : (
              <ul>
                {this.cartItems.map(item => (
                  <li>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h5 class="p-name">{item.name}</h5>
                      <h4 class="p-price">₹{item.price.toFixed(2)}</h4>
                      <h5 class="p-qty">Quantity : {item.quantity}</h5>
                    </div>
                    <button class="dlt-btn" onClick={this.removeCartItem.bind(this)}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <div class="t-box">
              <p class="total">Total : ₹{this.totalAmount.toFixed(2)}</p>
              <button class="buy-btn">BUY</button>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}
