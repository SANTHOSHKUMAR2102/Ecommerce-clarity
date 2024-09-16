import { r as registerInstance, h, e as Host } from './index-c9c44181.js';

const cdSigninCss = ":host{display:block;position:relative;background-color:rgb(0, 0, 0, 0.5);height:720px}nav{display:flex;align-items:center;justify-content:space-between;padding:0 20px;margin-top:0}nav a{text-decoration:none;color:white;margin-right:10px}nav a:hover{color:grey}nav h2{margin-top:10px;color:orange}#register-form{margin:auto;width:34%}#register-form fieldset{display:grid;width:400px;padding:20px;border:0;border-radius:10px;border-color:grey;background-color:white;box-shadow:0 4px 8px rgba(0, 0, 0, 0.5)}#register-form input{border:0;background-color:rgb(224, 224, 224);padding:10px;cursor:pointer}.submit-btn{text-align:center;margin-bottom:10px}a{text-align:center;font-size:12px}h2{font-style:italic}.sign-title{text-align:center}img{position:absolute;top:0;bottom:0;left:px;border-radius:10px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.5);width:100%;height:720px;z-index:-1}";

const CdSignin = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.userName = undefined;
        this.mobileNumber = undefined;
        this.userID = undefined;
        this.userPassword = undefined;
        this.confirmPassword = undefined;
        this.nameError = null;
        this.mobileNumberError = null;
        this.userIdError = null;
        this.passwordError = null;
    }
    nameValidation(event) {
        this.userName = event.target.value.trim();
        if (this.userName.length == 0) {
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
    userIDValidation(event) {
        this.userID = event.target.value.trim();
        if (this.userID.length == 0) {
            this.userIdError = 'ID reruired';
            return false;
        }
        this.userIdError = '';
    }
    passwords(event) {
        this.userPassword = event.target.value.trim();
        if (this.userPassword.length < 5) {
            this.passwordError = 'password must be atleast 6 characters long';
            return false;
        }
        this.passwordError = null;
        if (this.confirmPassword !== this.userPassword) {
            this.passwordError = 'password not matching';
            return false;
        }
        this.passwordError = '';
    }
    passwordValidation(event) {
        console.log("mathod called");
        this.confirmPassword = event.target.value.trim();
        if (this.userPassword.length < 5) {
            this.passwordError = 'password must be atleast 6 characters long';
            return false;
        }
        else if (this.confirmPassword !== this.userPassword) {
            this.passwordError = 'password not matching';
            return false;
        }
        this.passwordError = '';
    }
    onsubmit() {
        if (this.passwordError == '' && this.userIdError == '' && this.nameError == '' && this.mobileNumberError == '') {
            this.stroreDetails(this.userName, this.mobileNumber, this.userID, this.userPassword);
        }
        else {
            alert("enter required details");
            return;
        }
    }
    stroreDetails(name, mobile, Id, password) {
        let userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : [];
        if (!this.validateRegister(Id)) {
            return;
        }
        let userDetails = {
            userName: name,
            userMobile: mobile,
            userID: Id,
            userPassword: password,
        };
        userData.push(userDetails);
        localStorage.setItem("userData", JSON.stringify(userData));
        alert("registartion successful");
        location.href = '/login';
    }
    validateRegister(id) {
        let userData = JSON.parse(localStorage.getItem('userData'));
        if (userData) {
            for (let item of userData) {
                if (item.userID === id) {
                    if (confirm(`This ${id} ID already registerd!.. Do you want to login`))
                        location.href = '/login';
                    return false;
                }
            }
        }
        return true;
    }
    render() {
        return (h(Host, { key: 'cca91ce357ee391824a8b5140c846bb4476d0637' }, h("nav", { key: '600fba00620891e3f1d8ec5d8bfcb057a863f55e' }, h("h2", { key: 'f4a047f2600eec27390066e06a3f6b43a8b0b777' }, "Clarity"), h("a", { key: '2a5b77092a96c9c0ce25f1411070e2a3ebf35e23', href: "/home/page" }, "HOME")), h("h2", { key: 'f3cbbd57effaa9fa14817d82b391a70ff25b135e', class: "sign-title" }, "SignIn Please"), h("form", { key: '211808fc28cf66596ad726182dbe1ef4b6b4981c', action: "", id: 'register-form' }, h("fieldset", { key: 'd2aa5fd0fb0bd7acb6b9a9a9dcb2f3576f1973bd' }, h("label", { key: '3d34247f50b3fccc3adee681e43afb1997aadbab', htmlFor: "" }, "Name *"), h("input", { key: '803f7f16ba2127cfd2ef0fab8f5ac5324fec71c3', type: "text", placeholder: 'Enter your name', onInput: (event) => this.nameValidation(event), required: true }), h("p", { key: '6153435300087d7965c18457e64d4bc3bb261033', class: this.nameError ? 'invalid-output' : 'valid' }, this.nameError), h("label", { key: '4fc99e1857cb05f0c2fd2a326a31f077c45deb1b', htmlFor: "" }, "Mobile *"), h("input", { key: 'ed1ea12e95a25d004f205d4c6b4e2c6253965aeb', type: "tel", placeholder: 'Enter mobile number', onInput: (event) => this.mobileValidation(event), required: true }), h("p", { key: 'a351e511141e553586b2f20d45fd7557a3a30768', class: this.mobileNumberError ? 'invalid-output' : 'valid' }, this.mobileNumberError), h("label", { key: 'fdbc4b9039e9877bdd75ee6feeaa0ce177d740f7', htmlFor: "" }, "User ID *"), h("input", { key: '7f3831f7c4001946d7c93ad590df1b52074972f2', type: "text", placeholder: 'Enter ID', onInput: (event) => this.userIDValidation(event), required: true }), h("p", { key: '6a4a472853b23e0005725c23a08b6a6bfac5b86f', class: this.userIdError ? 'invalid-output' : 'valid' }, this.userIdError), h("label", { key: '1ecc6bace764790b48d1b8f6fa12d76525a7b6a5', htmlFor: "" }, "Password *"), h("input", { key: '6349a851c2f45e5288573c38b28cb83343104c51', type: "password", placeholder: 'Enter password', onInput: (event) => this.passwords(event), required: true }), h("br", { key: 'f13f12198e5c4358b6edc5ccdac472b78990d257' }), h("label", { key: 'bc49a1cca4e07f3b0aa0c0af1de5a511f6fc609a', htmlFor: "" }, "Confirm password *"), h("input", { key: 'e80caf7c84a933c52958b3b6af96da9326bb34d8', type: "password", placeholder: 'Confirm password', onClick: (event) => this.passwordValidation(event), onInput: (event) => this.passwordValidation(event), required: true }), h("p", { key: '414afeb7d76a921626cb3bcc31e74f2af0cb3b27', class: this.passwordError ? 'invalid-output' : 'valid' }, this.passwordError), h("div", { key: '0e6892da09ae6dadfc0a335f3aacfa9bc8e4304f', class: "submit-btn" }, h("input", { key: 'fbba8b15404efc5b70b94a4a04aa0cb1a6c2ad83', id: 'submit', type: "button", value: 'SIGNIN', onClick: this.onsubmit.bind(this) })), h("a", { key: '7e28126849dae42c2cad91860c8e3f29cb06a0fa', href: "/login" }, "I have already Accout - Login"))), h("img", { key: 'fcb1bf62c94d60b4389c169000af60e1f773bc3a', src: "/assets/BG2.jpg", alt: "" })));
    }
};
CdSignin.style = cdSigninCss;

export { CdSignin as cd_signin };

//# sourceMappingURL=cd-signin.entry.js.map