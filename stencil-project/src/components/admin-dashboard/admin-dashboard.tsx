import { Component, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'admin-dashboard',
  styleUrl: 'admin-dashboard.css',
  shadow: true,
})
export class AdminDashboard {
  @Prop({ reflect: true, mutable: true }) open: boolean;
  @Prop({ reflect: true, mutable: true }) product: boolean;
  @Prop({ reflect: true, mutable: true }) btn: boolean;
  @State() userData: any[] = [];
  @State() productsList = [];
  @State() editingProductIndex: number = -1;
  @State() editImage: string = "";

  cardOpen() {
    this.open = !this.open;
    this.product = false;
  }

  pOpen() {
    this.product = !this.product;
    this.btn = !this.btn;
    this.open = false;
  }

  componentWillLoad() {
    this.getUserData();
    this.getproductsList();
  }

  getUserData() {
    const data = localStorage.getItem('userData');
    if (data) {
      try {
        this.userData = JSON.parse(data);
        console.log(this.userData);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    } else {
      console.error('No data found in localStorage');
    }
  }

  getproductsList() {
    const productsList = localStorage.getItem('productsList');
    if (productsList) {
      try {
        this.productsList = JSON.parse(productsList);
        console.log(this.productsList);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    } else {
      console.error('No product data found in localStorage');
    }
  }

  removeData(index: number) {
    this.userData.splice(index, 1);
    localStorage.setItem('userData', JSON.stringify(this.userData));
    window.location.reload();
  }

  removeproductsList(index: number) {
    this.productsList.splice(index, 1);
    localStorage.setItem('productsList', JSON.stringify(this.productsList));
    window.location.reload();
  }

  handleInputChange(event: Event, field: string, index: number) {
    const target = event.target as HTMLInputElement;
    if (field === 'name') {
      this.productsList[index].name = target.value;
    } else if (field === 'price') {
      this.productsList[index].price = target.value;
    } else if (field === 'image') {
      this.productsList[index].image = target.value;
    }
  }

  editproductsList(index: number) {
    if (this.editingProductIndex === index) {
      localStorage.setItem('productsList', JSON.stringify(this.productsList));
      this.editingProductIndex = -1;
    } else {
      this.editingProductIndex = index;
    }
  }

  render() {
    return (
      <Host>
        <nav>
          <h2>Clarity</h2>
          <h3>ADMIN PAGE</h3>
          <a href="/">Logout</a>
        </nav>
        <div class="dash">
          <div class="dash-box" onClick={this.cardOpen.bind(this)}>
            <h2>USERS</h2>
            <p>{this.userData.length}</p>
          </div>
          <div class="dash-box" onClick={this.pOpen.bind(this)}>
            <h2>TOTAL PRODUCTS</h2>
            <p>{this.productsList.length}</p>
          </div>
        </div>
        <div class="user-card">
          <table>
            <thead>
              <tr>
                <th>UserID</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Password</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {this.userData.map((user, index) => (
                <tr key={index}>
                  <td>{user.userID}</td>
                  <td>{user.userName}</td>
                  <td>{user.userMobile}</td>
                  <td>{user.userPassword}</td>
                  <td><button class="dlt-btn" onClick={() => this.removeData(index)}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div class="product-card">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {this.productsList.map((item, index) => (
                <tr key={index}>
                  <td>{this.editingProductIndex === index ? (
                      <input type="text" value={this.editImage} onInput={(event) => this.handleInputChange(event, 'image', index)} />
                    ) : (
                      <img src={item.image} alt={item.name} width="50" />
                    )}</td>
                  <td>
                    {this.editingProductIndex === index ? (
                      <input type="text" value={item.name} onInput={(event) => this.handleInputChange(event, 'name', index)} />
                    ) : (
                      item.name
                    )}
                  </td>
                  <td>
                    {this.editingProductIndex === index ? (
                      <input type="text" value={item.price} onInput={(event) => this.handleInputChange(event, 'price', index)} />
                    ) : (
                      item.price
                    )}
                  </td>
                  <td>
                    {this.editingProductIndex === index ? (
                      <button class="edit-btn" onClick={() => this.editproductsList(index)}>Save</button>
                    ) : (
                      <button class="edit-btn" onClick={() => this.editproductsList(index)}>Edit</button>
                    )}
                    <button class="dlt-btn" onClick={() => this.removeproductsList(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div class="bg-img">
          <img src="/assets/BG4.jpg" alt="" />
        </div>
      </Host>
    );
  }
}
