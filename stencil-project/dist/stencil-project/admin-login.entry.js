import { r as registerInstance, h, e as Host } from './index-c9c44181.js';

const adminLoginCss = ":host{display:block;background-color:rgb(0, 0, 0, 0.5);height:720px;border-radius:10px;position:relative}nav{display:flex;align-items:center;justify-content:space-between;padding:0 20px;margin-top:0;color:white}nav a{text-decoration:none;color:white;margin-right:10px}nav a:hover{color:grey}nav h2{margin-top:10px;color:orange}h2{color:white}#login-form{margin:auto;width:34%}#login-form fieldset{display:grid;width:400px;padding:20px;border-radius:10px;border-color:grey;border:0;background-color:white;box-shadow:0 4px 8px rgba(0, 0, 0, 0.5)}#login-form input{border:0;background-color:rgb(224, 224, 224);padding:10px}.submit-btn{text-align:center;margin-bottom:10px}.submit-btn input{cursor:pointer}a{text-align:center;font-size:12px}h2{text-align:center;font-style:italic}span{color:red}img{position:absolute;top:0;bottom:0;left:px;border-radius:10px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.5);width:100%;height:720px;z-index:-1}void{display:none}";

const AdminLogin = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.adminID = '';
        this.adminPassword = '';
        this.passwordError = null;
    }
    adminId(event) {
        this.adminID = event.target.value.trim();
        this.passwordError = "";
    }
    Password(event) {
        this.adminPassword = event.target.value.trim();
        this.passwordError = "";
    }
    onsubmit(event) {
        event.preventDefault();
        if (this.adminID != '' && this.adminPassword != '') {
            this.validateadminDetails(this.adminID, this.adminPassword);
            return;
        }
        alert('Enter the details');
    }
    validateadminDetails(adminID, password) {
        let admindata = JSON.parse(localStorage.getItem('adminData'));
        if (admindata) {
            for (let admin of admindata) {
                if (adminID === admin.adminID) {
                    if (password == admin.adminPassword) {
                        alert("login success");
                        localStorage.setItem('adminRefID', admin.adminID);
                        location.href = '/admin/dashboard';
                        return;
                    }
                    else {
                        alert("Invalid Password");
                        console.log('Invalid password error set');
                        return;
                    }
                }
            }
        }
        alert('Admin not found');
    }
    render() {
        {
            console.log("rendering");
        }
        return (h(Host, { key: '5a2cefeb6dc8c59d01a7a219bc30db071016213c' }, h("nav", { key: '062d70f9e2f9d3a28ebe8be080292afadc60f368' }, h("h2", { key: '53c2861571a9281d236c9a85f498364e449d48d3' }, "Clarity"), h("h3", { key: 'd0cdb0125cceb97908032c5bbd936e7328c53ae7' }, "ADMIN LOGIN"), h("a", { key: 'e079d4604d9bf29650b27b3d8e06c10e3774b443', href: "/home/page" }, "HOME")), h("h2", { key: '4c1905e5a00380228a23b17da0ae9683d577a276' }, "Welcome to ", h("span", { key: '77727a6b157d07f651fc9297cd1892440fea0e86' }, "Clarity Headphones!!")), h("h2", { key: 'f54fee44fe108adc936b6ce5e39abd72e8ac40fb' }, "LogIn Please"), h("form", { key: '3044437613f048ea11de6a401107afae4aa5bdd4', action: "", id: 'login-form' }, h("fieldset", { key: '73dc93758135d90c5f72e88bf37036d8d4254200' }, h("label", { key: '6cd93ddd88bf0f6838e8f47ff28a3895c4fc7ea1', htmlFor: "" }, " Admin ID *"), h("br", { key: '52199a8e51f0af07cb7aea5bb506c244a54c22ec' }), h("input", { key: '116efcd4479073f80bc86252956d8ecd55932949', type: "text", placeholder: 'Enter your ID', onInput: this.adminId.bind(this), required: true }), h("br", { key: 'e1cc9fc91de4bc718362d7b309cd52576965765a' }), h("label", { key: '8e14cfff1b6820f3df4b8055c7aa75d1aea7a115', htmlFor: "" }, "Password *"), h("br", { key: 'f2c8fbf54a155101943b0238f1564bcbce537719' }), h("input", { key: '2d3634ed545fedbf583bb50b0290fa04716be259', type: "password", placeholder: 'Enter password', onInput: this.Password.bind(this), required: true }), h("p", { key: '8597b551dc5aca3d8953f77af118c9b5ab91608f', class: this.passwordError ? 'invalid-output' : 'valid' }, this.passwordError), h("div", { key: 'bbcc66bd20983f9355abeff59fc0988aee4dc690', class: "submit-btn" }, h("input", { key: '33a8abd7d8b5fe6048fbaae3c7f17f69d728a42d', type: "Submit", value: "LOGIN", onClick: this.onsubmit.bind(this) })), h("a", { key: '51f5aba410ff1066b612826d3028793455208fef', href: "/admin/signin" }, "i don't have a Account goto - SignIn"))), h("img", { key: '63ae351862c580ca58ad4214874186dcbe631d3e', src: "/assets/BG6.jpg", alt: "" })));
    }
};
AdminLogin.style = adminLoginCss;

export { AdminLogin as admin_login };

//# sourceMappingURL=admin-login.entry.js.map