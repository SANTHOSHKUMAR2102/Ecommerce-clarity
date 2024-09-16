import { r as registerInstance, h, e as Host } from './index-c9c44181.js';

const chLogoutCss = ":host{display:block;background-color:rgb(0, 0, 0, 0.5);height:720px;position:relative;border-radius:10px}nav{display:flex;align-items:center;justify-content:space-between;padding:0 20px;margin-top:0}nav a{text-decoration:none;color:white;margin-right:10px}nav a:hover{color:grey}nav h2{margin-top:10px;color:orange}#login-form{margin:auto;width:34%}#login-form fieldset{display:grid;width:400px;padding:20px;border-radius:10px;border-color:grey;border:0;background-color:white}#login-form input{border:0;background-color:rgb(224, 224, 224);padding:10px}.submit-btn{text-align:center;margin-bottom:10px}a{text-align:center;font-size:12px}h2{text-align:center;font-style:italic;color:white}span{color:orange}img{position:absolute;top:0;bottom:0;left:px;border-radius:10px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.5);width:100%;height:720px;z-index:-1}";

const ChLogin = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.userID = '';
        this.userPassword = '';
    }
    userId(event) {
        this.userID = event.target.value.trim();
    }
    Password(event) {
        this.userPassword = event.target.value.trim();
    }
    onsubmit(event) {
        event.preventDefault();
        if (this.userID != '' && this.userPassword != '') {
            this.validateUserDetails(this.userID, this.userPassword);
            return;
        }
        alert('enter the details');
    }
    validateUserDetails(userID, password) {
        let userdata = JSON.parse(localStorage.getItem('userData'));
        for (let user of userdata) {
            if (userID === user.userID) {
                if (password == user.userPassword) {
                    alert("login success");
                    localStorage.setItem('userRefID', user.userID);
                    location.href = '/product/list';
                    return;
                }
                else {
                    alert('Invalid Password');
                    return;
                }
            }
        }
        alert('User not found');
    }
    render() {
        {
            console.log("rendering");
        }
        return (h(Host, { key: 'cf097f2635ab0729a3155f525a147b23d46209cd' }, h("nav", { key: 'ed338f66ada0e773cc41ca84e30846c716ef69ce' }, h("h2", { key: 'c5dc0e82fddd2f285d1456d19d594c516c4ae3ad' }, "Clarity"), h("a", { key: '4ef6f34c44afc2f633f72f46f1b8445bac11fc04', href: "/home/page" }, "HOME")), h("h2", { key: 'bbfc7197020970336a01d2a4c665aacad60ae861' }, "Welcome to ", h("span", { key: '1cd5426bd1c27442ca6a78b61f676b6d73ee8424' }, "Clarity Headphones!!")), h("h2", { key: '4b221b948ae9484cef93eb16e98101150a643a3f' }, "LogIn Please"), h("form", { key: 'e108ea958daa2afc1b990f647f7f0a52f283f1e3', action: "", id: 'login-form' }, h("fieldset", { key: '534c60791c87774c4284485e18811ccb85c0ae4d' }, h("label", { key: '6e46e18d3c652f016aced97ef33d4af3182cd1cc', htmlFor: "" }, " User ID *"), h("br", { key: '1fa30e857b014210c81409af01d195955177df60' }), h("input", { key: 'd20ebb31df993db4bfc41a19ced917df63ae7812', type: "text", placeholder: 'Enter your ID', onInput: this.userId.bind(this), required: true }), h("br", { key: 'c4d74a8d041b00fcbfb099099eda352bbb0543b3' }), h("label", { key: '3618b3a47a8b3df2f6527f2bef1cc8bb6596f369', htmlFor: "" }, "Password *"), h("br", { key: '5546410bf838d9b331f22696230b67bf32ae6323' }), h("input", { key: '9eab5a2a6c11051631de2218ef73fa86c2f3f5f9', type: "password", placeholder: 'Enter password', onInput: this.Password.bind(this), required: true }), h("br", { key: '95882d35e71b96a14fc4273d707dd84296a46a09' }), h("br", { key: 'f08e3c5ee236ac1abf440529112adec43d1be4b4' }), h("div", { key: '5ea8a05f72927414115b13fa1b57ec2cbe153b74', class: "submit-btn" }, h("input", { key: 'cfde60ea4325c03493f76a849ca77a5ef7f07e09', type: "Submit", value: "LOGIN", onClick: this.onsubmit.bind(this) })), h("a", { key: 'fbcbe6024eea4cdfe58c827a98ece806e37db4ea', href: "/signin" }, "i don't have a Account goto - SignIn"))), h("img", { key: 'fe8822a8a9a991c1f7618c6cf5702e8f153d2820', src: "/assets/BG3.avif", alt: "" })));
    }
};
ChLogin.style = chLogoutCss;

export { ChLogin as ch_login };

//# sourceMappingURL=ch-login.entry.js.map