import { r as registerInstance, h } from './index-c9c44181.js';

const homePageCss = "body{margin:0;position:relative;font-style:italic;background-color:rgb(0, 0, 0, 0.5);height:720px;border-radius:10px}body img{position:absolute;top:0;bottom:0;border-radius:10px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.5);z-index:-1}.about{text-decoration:none;color:white;float:right;padding:10px 20px;font-style:normal;font-size:small;margin-right:20px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.5)}.about:hover{color:grey}.caption{padding:100px}.caption .login-btn{padding:10px 20px;border:0;background-color:#218838;color:white;box-shadow:0 4px 8px rgba(0, 0, 0, 0.3);border-radius:5px;cursor:pointer}.caption .login-btn:hover{box-shadow:0 4px 8px rgba(0, 0, 0, 0.5);background-color:#6ba578}.title{color:orange}.login-btn-container{display:inline-block;margin-right:30px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.5);padding:10px 40px;border-radius:10px;text-decoration:none;background-color:whitesmoke}.login-btn-container p{color:black;display:inline-block;margin-right:20px}.u-btn,.admin-btn{padding:10px 50px;border:0;background-color:rgb(204, 203, 203);color:black;border-radius:10px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1);cursor:pointer}.u-btn:hover,.admin-btn:hover{background-color:white}";

const HomePage = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.open = undefined;
    }
    btnOpen() {
        this.open = !this.open;
    }
    render() {
        return (h("body", { key: '6c35eff7c47ebfb5b28d539a4c73d873c1f15f30' }, h("a", { key: '8b3e2e3a2b9e918dfe4bdf86b871d64b2f20c64e', href: "/about", class: "about" }, "ABOUT"), h("div", { key: '1cfc65ffdcee91b01896c1168279ab16c8231af2', class: "caption" }, h("h1", { key: 'e696a146ee54cb8db2549b49a3d797cfe75aa84a', class: "title" }, "Clarity Headphones!!"), h("h2", { key: '1458abe00e0b9e3183ed1b5c1dcc3e129a2f74fd' }, "\"Unlock the Ultimate Audio Experience with Clarity Headphones\""), h("a", { key: '1ee7902ddc213f076ed7b9db246775dc9de40438', href: "/signin", class: "login-btn-container" }, h("p", { key: '20ecaba56ec9f878dbf1ec00b8c52a214cdf5a9c' }, "User"), h("button", { key: 'a0269fed0246cd0291c825d77d5aaf76d76761ec', class: "login-btn" }, "LOGIN")), h("a", { key: 'd474e2c2735506ac5526a1641aed74e304299dd1', href: "/admin/signin", class: "login-btn-container" }, h("p", { key: '9d80dbdb8c1cb39987cd51736eacaec55ace387d' }, "Admin"), h("button", { key: 'def06d370d6d57da0a167fe7815d3d59bd129171', class: "login-btn" }, "LOGIN"))), h("img", { key: 'cc90735af5bee28b521d9aaa91873337a05c1798', src: "/assets/bg.jpg", alt: "" })));
    }
};
HomePage.style = homePageCss;

export { HomePage as home_page };

//# sourceMappingURL=home-page.entry.js.map