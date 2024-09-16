import { r as registerInstance, h, e as Host } from './index-c9c44181.js';

const adminDashboardCss = ":host{display:block;position:relative;background-color:rgb(0, 0, 0, 0.5);height:720px;border-radius:10px}nav{display:flex;align-items:center;justify-content:space-between;padding:0 20px;color:white;z-index:1}h2{font-style:italic;color:orange}.dash{display:grid;grid-template-columns:auto auto;gap:30px;text-align:center;margin:30px}.dash-box{border:0;border-radius:10px;cursor:pointer;box-shadow:0 4px 8px rgba(0, 0, 0, 0.5);background-color:white}.dash-box:hover{background-color:rgb(219, 229, 231)}table{font-family:arial, sans-serif;border-collapse:collapse;width:100%}.product-card{position:fixed;width:70%;left:200px;bottom:-100%;transition:0.5s;overflow-y:auto;overflow-x:hidden;cursor:pointer}:host([product]) .product-card,.allClear-btn{top:250px;transition:0.5s}.user-card{position:fixed;width:70%;left:200px;bottom:-100%;transition:0.5s;overflow-y:auto;overflow-x:hidden}:host([open]) .user-card{top:250px;transition:0.5s}td,th{border:1px solid #dddddd;text-align:center;padding:8px}th{background-color:black;color:white}tr{background-color:white}tr:nth-child(even){background-color:#dddddd}.dlt-btn{padding:5px 10px;border:none;background-color:rgb(212, 8, 8);color:white;border-radius:5px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.5)}.dlt-btn:hover{background-color:rgb(255, 0, 0);cursor:pointer}tr img{border-radius:30px;width:50px;height:50px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.5)}.allClear-btn{padding:5px 5px;border:0;float:right;background-color:red;color:white;border-radius:5px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.5);cursor:pointer}a{text-decoration:none;color:white}.bg-img img{position:absolute;top:0;bottom:0;left:px;border-radius:10px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.5);width:100%;height:720px;z-index:-1}.edit-btn{padding:5px 10px;margin-right:20px;border:0;background-color:grey;border-radius:5px}";

const AdminDashboard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.open = undefined;
        this.product = undefined;
        this.btn = undefined;
        this.userData = [];
        this.productsList = [];
        this.editingProductIndex = -1;
        this.editImage = "";
    }
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
            }
            catch (error) {
                console.error('Error parsing JSON:', error);
            }
        }
        else {
            console.error('No data found in localStorage');
        }
    }
    getproductsList() {
        const productsList = localStorage.getItem('productsList');
        if (productsList) {
            try {
                this.productsList = JSON.parse(productsList);
                console.log(this.productsList);
            }
            catch (error) {
                console.error('Error parsing JSON:', error);
            }
        }
        else {
            console.error('No product data found in localStorage');
        }
    }
    removeData(index) {
        this.userData.splice(index, 1);
        localStorage.setItem('userData', JSON.stringify(this.userData));
        window.location.reload();
    }
    removeproductsList(index) {
        this.productsList.splice(index, 1);
        localStorage.setItem('productsList', JSON.stringify(this.productsList));
        window.location.reload();
    }
    handleInputChange(event, field, index) {
        const target = event.target;
        if (field === 'name') {
            this.productsList[index].name = target.value;
        }
        else if (field === 'price') {
            this.productsList[index].price = target.value;
        }
        else if (field === 'image') {
            this.productsList[index].image = target.value;
        }
    }
    editproductsList(index) {
        if (this.editingProductIndex === index) {
            localStorage.setItem('productsList', JSON.stringify(this.productsList));
            this.editingProductIndex = -1;
        }
        else {
            this.editingProductIndex = index;
        }
    }
    render() {
        return (h(Host, { key: '55609d4b612f7845f29da599a729a1910769b74c' }, h("nav", { key: 'f3fa1b21a404022318e3674e2cd7b1f0d0b314bc' }, h("h2", { key: 'b02df6e580c1853f39ede2426ecac1eca9cf0123' }, "Clarity"), h("h3", { key: 'f0ea9e2cdec54f7c83558bb0e1c8cc29a4cd43f4' }, "ADMIN PAGE"), h("a", { key: '8591cdba1ac8afce9e121b7d75312a7fc0462bee', href: "/" }, "Logout")), h("div", { key: '9136666963545143a2119622e88dca3fe07808ad', class: "dash" }, h("div", { key: 'e02d8b07b11a4ff62781306bc2edc319a22e7c46', class: "dash-box", onClick: this.cardOpen.bind(this) }, h("h2", { key: 'a0c6084a5254a6af5c57321ec03a490f4768de83' }, "USERS"), h("p", { key: '1bb951b1eb68ea71767dcc7eb24e2e0c4bd66360' }, this.userData.length)), h("div", { key: '3e49ed8602b1d413c50111c0705a7946a6b3e952', class: "dash-box", onClick: this.pOpen.bind(this) }, h("h2", { key: '6fd47f79da827acef6a81efc6ad27f1ba184c851' }, "TOTAL PRODUCTS"), h("p", { key: 'e990dad5a5634a8af0f9ed2f9cb98c794023c4d9' }, this.productsList.length))), h("div", { key: 'a90406043d4c7d232de8054a3bd45a3c43b1cdf6', class: "user-card" }, h("table", { key: '6706dfe08814d38823193d2acbf4daa9eed55040' }, h("thead", { key: '45bf54fc071961aa9263d078a564e44b3acbdee2' }, h("tr", { key: '02748e5d522b0f9fab42906b0da72903aba239c8' }, h("th", { key: '17c7eeee5799f1aa73ff26e4dce310e574a58a0a' }, "UserID"), h("th", { key: 'b09f13611cafa6c1415b97010e70cb97dd381829' }, "Name"), h("th", { key: 'a921a9fce3708c0d543132cc91d17f8b9617574a' }, "Mobile"), h("th", { key: '25ee5299feca857d125a379f0729a61d1c07a906' }, "Password"), h("th", { key: '9d6b98632a27218ace14ea9c2a80583976b77655' }, "Remove"))), h("tbody", { key: '5e8283e38cfa38480cdff186c5de8eb6ed9cd6d1' }, this.userData.map((user, index) => (h("tr", { key: index }, h("td", null, user.userID), h("td", null, user.userName), h("td", null, user.userMobile), h("td", null, user.userPassword), h("td", null, h("button", { class: "dlt-btn", onClick: () => this.removeData(index) }, "Delete")))))))), h("div", { key: '57c07e0058038410ec35f8b37bb1cdb9420076c9', class: "product-card" }, h("table", { key: 'a501eff2a550f7b2105c01b0da7fbdf9b5d25b6e' }, h("thead", { key: '2d7bd0107f723daa4e0a0bc8402b1c4e3e82da74' }, h("tr", { key: 'e11d552c3221563905706675c9093e50d587d5bc' }, h("th", { key: 'faf93e91cfd1ca137add9392091150d7bf11bf21' }, "Product"), h("th", { key: '1919169e3bb13d36f17d67d4dee0a8f624552ebf' }, "Name"), h("th", { key: '19d19265676f9c5e18539f5e4324368277c0a20a' }, "Price"), h("th", { key: '2f8dbd8ed8bc54ebbb6d993e2c076aa91fa079f8' }, "Remove"))), h("tbody", { key: 'c8e9d7c4644299dca5971d1473ae33e75e43bcb4' }, this.productsList.map((item, index) => (h("tr", { key: index }, h("td", null, this.editingProductIndex === index ? (h("input", { type: "text", value: this.editImage, onInput: (event) => this.handleInputChange(event, 'image', index) })) : (h("img", { src: item.image, alt: item.name, width: "50" }))), h("td", null, this.editingProductIndex === index ? (h("input", { type: "text", value: item.name, onInput: (event) => this.handleInputChange(event, 'name', index) })) : (item.name)), h("td", null, this.editingProductIndex === index ? (h("input", { type: "text", value: item.price, onInput: (event) => this.handleInputChange(event, 'price', index) })) : (item.price)), h("td", null, this.editingProductIndex === index ? (h("button", { class: "edit-btn", onClick: () => this.editproductsList(index) }, "Save")) : (h("button", { class: "edit-btn", onClick: () => this.editproductsList(index) }, "Edit")), h("button", { class: "dlt-btn", onClick: () => this.removeproductsList(index) }, "Delete")))))))), h("div", { key: '05e73e80e4f4f1b21e2b4407c838ca972f77d715', class: "bg-img" }, h("img", { key: '741144e38657d67065e36b64200e83cf4e1d7af0', src: "/assets/BG4.jpg", alt: "" }))));
    }
};
AdminDashboard.style = adminDashboardCss;

export { AdminDashboard as admin_dashboard };

//# sourceMappingURL=admin-dashboard.entry.js.map