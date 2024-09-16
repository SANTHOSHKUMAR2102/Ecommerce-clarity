import { r as registerInstance, h, e as Host } from './index-c9c44181.js';

const adminSigninCss = ":host{display:block;position:relative;background-color:rgb(0, 0, 0, 0.5);height:720px;border-radius:10px}nav{display:flex;align-items:center;justify-content:space-between;padding:0 20px;margin-top:0}nav a{text-decoration:none;color:white;margin-right:10px}nav a:hover{color:grey}nav h2{margin-top:10px;color:orange}#register-form{margin:auto;width:33%}#register-form fieldset{display:grid;width:400px;padding:20px;border:0;border-radius:10px;border-color:grey;background-color:white;box-shadow:0 4px 8px rgba(0, 0, 0, 0.5)}#register-form input{border:0;background-color:rgb(224, 224, 224);padding:10px}.submit-btn{text-align:center;margin-bottom:10px}fieldset p{color:red;font-size:small}a{text-align:center;font-size:12px}h2{font-style:italic}.sign-title{text-align:center}img{position:absolute;top:0;bottom:0;left:px;border-radius:10px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.5);width:100%;height:720px;z-index:-1}";

const AdminSignin = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.adminName = undefined;
        this.mobileNumber = undefined;
        this.adminID = undefined;
        this.adminPassword = undefined;
        this.confirmPassword = undefined;
        this.nameError = null;
        this.mobileNumberError = null;
        this.adminIdError = null;
        this.passwordError = null;
    }
    nameValidation(event) {
        this.adminName = event.target.value.trim();
        if (this.adminName.length == 0) {
            this.nameError = 'name is required';
            return false;
        }
        this.nameError = '';
    }
    mobileValidation(event) {
        this.mobileNumber = event.target.value.trim();
        if (this.mobileNumber.length != 10) {
            this.mobileNumberError = 'mobile number must contain 10 digit';
            return false;
        }
        this.mobileNumberError = '';
    }
    adminIDValidation(event) {
        this.adminID = event.target.value.trim();
        if (this.adminID.length == 0) {
            this.adminIdError = 'ID reruired';
            return false;
        }
        this.adminIdError = '';
    }
    passwords(event) {
        this.adminPassword = event.target.value.trim();
        if (this.adminPassword.length < 5) {
            this.passwordError = 'password must be atleast 6 characters long';
            return false;
        }
        this.passwordError = null;
        if (this.confirmPassword !== this.adminPassword) {
            this.passwordError = 'password not matching';
            return false;
        }
        this.passwordError = '';
    }
    passwordValidation(event) {
        console.log("mathod called");
        this.confirmPassword = event.target.value.trim();
        if (this.adminPassword.length < 5) {
            this.passwordError = 'password must be atleast 6 characters long';
            return false;
        }
        else if (this.confirmPassword !== this.adminPassword) {
            this.passwordError = 'password not matching';
            return false;
        }
        this.passwordError = '';
    }
    onsubmit() {
        if (this.passwordError == '' && this.adminIdError == '' && this.nameError == '' && this.mobileNumberError == '') {
            this.stroreDetails(this.adminName, this.mobileNumber, this.adminID, this.adminPassword);
        }
        else {
            alert("enter required details");
            return;
        }
    }
    stroreDetails(name, mobile, Id, password) {
        let adminData = localStorage.getItem('adminData') ? JSON.parse(localStorage.getItem('adminData')) : [];
        if (!this.validateRegister(Id)) {
            return;
        }
        let adminDetails = {
            adminName: name,
            adminMobile: mobile,
            adminID: Id,
            adminPassword: password,
        };
        adminData.push(adminDetails);
        localStorage.setItem("adminData", JSON.stringify(adminData));
        alert("registartion successful");
        location.href = '/admin/login';
    }
    validateRegister(id) {
        let adminData = JSON.parse(localStorage.getItem('adminData'));
        if (adminData) {
            for (let item of adminData) {
                if (item.adminID === id) {
                    if (confirm(`This ${id} ID already registerd!.. Do you want to login`))
                        location.href = '/login';
                    return false;
                }
            }
        }
        return true;
    }
    render() {
        return (h(Host, { key: '9821464d85577c525eca79b670baa531e2ca8dce' }, h("nav", { key: '8f3865c3908c477aafc0ea59cd3db554b69f7b90' }, h("h2", { key: 'e7f38e023bf7e22de5b1c5a8f4042c42d06ee993' }, "Clarity"), h("h3", { key: '44515afafb87c0c01b2c024200bc1001967723c9' }, "ADMIN PAGE"), h("a", { key: 'c6dda9b3be4ff1cf0a7ec7b18464a5ea5bf1a912', href: "/home/page" }, "HOME")), h("h2", { key: 'ea8de6065e5e1ccdb25e2a810e3d6fc9e9c2fa8f', class: "sign-title" }, "SignIn Please"), h("form", { key: '45c0e311e85264a9e90cacd82c5ed5e10b95556e', action: "", id: 'register-form' }, h("fieldset", { key: '46775dc9582831a6e95665e03152e97cb7c5ff16' }, h("label", { key: '933cdbd6a396cd032b32d5ba1f3c4dccbe9bc0bd', htmlFor: "" }, "Name *"), h("input", { key: '9bf75094a87e4a214d4bbdcc76b966224414b7c4', type: "text", placeholder: 'Enter your name', onInput: (event) => this.nameValidation(event), required: true }), h("p", { key: '2ad7f7d0709b9ced8fe9c5f8214c0442f92a8c85', class: this.nameError ? 'invalid-output' : 'valid' }, this.nameError), h("label", { key: '3f7ce75924e374a2f723b13b9ec93f22582ba6e9', htmlFor: "" }, "Mobile *"), h("input", { key: '248cb4bf0135eed720fdb33ceb2201c1654b6ba2', type: "tel", placeholder: 'Enter mobile number', onInput: (event) => this.mobileValidation(event), required: true }), h("p", { key: '71dfa0ff46f80607b5c8d376e3e8fe22fe1d4350', class: this.mobileNumberError ? 'invalid-output' : 'valid' }, this.mobileNumberError), h("label", { key: '02b8f72ca9ec57450c12c85e0d963094b3680066', htmlFor: "" }, "admin ID *"), h("input", { key: '81ed0946cf6c24c111e7f83b3725eae44837715e', type: "text", placeholder: 'Enter ID', onInput: (event) => this.adminIDValidation(event), required: true }), h("p", { key: '500517b61b001eb546c3c4ab277a493da7493e26', class: this.adminIdError ? 'invalid-output' : 'valid' }, this.adminIdError), h("label", { key: 'ca0b1a170d5841db5961f88760508ef728377f01', htmlFor: "" }, "Password *"), h("input", { key: '4ae1ebe6a318eecf45d8fd2fa1c330216e434132', type: "password", placeholder: 'Enter password', onInput: (event) => this.passwords(event), required: true }), h("br", { key: '87d46afe8288e4edab3478a219c712e77c115583' }), h("label", { key: '60fe6d116d12005f6733b52b7dbacf71661c91c9', htmlFor: "" }, "Confirm password *"), h("input", { key: '3a1a152f071c57029233a7b3f61b5e740f2675e3', type: "password", placeholder: 'Confirm password', onClick: (event) => this.passwordValidation(event), onInput: (event) => this.passwordValidation(event), required: true }), h("p", { key: 'cc9186762735717e801219bc851eaa099ab599e2', class: this.passwordError ? 'invalid-output' : 'valid' }, this.passwordError), h("div", { key: 'fa177047db83047b6de4478792eead117afbfb32', class: "submit-btn" }, h("input", { key: '6f9ebfa0fe58b27def69bbd3caa47796a2774f6f', id: 'submit', type: "button", value: 'SignIn', onClick: this.onsubmit.bind(this) })), h("a", { key: 'a81da3c22e6680686f14c656163c231c041960a2', href: "/admin/login" }, "I have already Accout - Login"))), h("img", { key: '73ef86c8b7bed327f870c21559aaccf91e615c99', src: "/assets/BG4.jpg", alt: "" })));
    }
};
AdminSignin.style = adminSigninCss;

export { AdminSignin as admin_signin };

//# sourceMappingURL=admin-signin.entry.js.map