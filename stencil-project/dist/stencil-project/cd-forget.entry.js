import { r as registerInstance, h, e as Host } from './index-c9c44181.js';

const cdForgetCss = ":host{display:block}";

const CdForget = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.students = localStorage.getItem('studentDetails') ? JSON.parse(localStorage.getItem('studentDetails')) : [];
    }
    validation(event) {
        event.preventDefault();
        let id = true;
        let mobile = true;
        let password = true;
        // this.faculties.map((user: { userID: string; userMobile: string; userPassword: string; })=>{
        //   if(user.userID==this.enteredID.value.trim()){
        //     id=false;
        //     if(user.userMobile==this.enteredMobile.value.trim()){
        //       mobile=false;
        //       if(this.enteredPassword.value.trim()===this.enteredConfirmPassword.value.trim()){
        //         password=false;
        //         user.userPassword=this.enteredConfirmPassword.value.trim();
        //         alert('Success')
        //         localStorage.setItem('userData',JSON.stringify(this.faculties));
        //         location.href='/login'
        //       }
        //     }
        //   }
        // })
        this.students.map((user) => {
            if (user.userID == this.enteredID.value.trim()) {
                id = false;
                if (user.userMobile == this.enteredMobile.value.trim()) {
                    mobile = false;
                    if (this.enteredPassword.value.trim().length > 5 && this.enteredPassword.value.trim() === this.enteredConfirmPassword.value.trim()) {
                        password = false;
                        user.userPassword = this.enteredConfirmPassword.value.trim();
                        alert('Success');
                        localStorage.setItem('studentDetails', JSON.stringify(this.students));
                        location.href = '/login';
                    }
                }
            }
        });
        if (id)
            alert('Invalid ID');
        else if (mobile)
            alert('Invalid mobile umber');
        else if (this.enteredPassword.value.trim().length < 5)
            alert('password length must be 6 character');
        else if (password)
            alert("Password not matching");
    }
    back() {
        location.href = '/login';
    }
    render() {
        return (h(Host, { key: 'd1b86f08249ee002e721108283d545e22804f0cf' }, h("form", { key: '0a2197e2b44cab76c6e52688bbfda786a1b06186', action: "", id: 'login-form' }, h("fieldset", { key: 'b476cbbdb8a3ab431d0963a6e40106543ed4ea11' }, h("label", { key: '1eb6186d60448035588fafcb52d6a84a05fdd454', htmlFor: "" }, "Enter ID *"), h("br", { key: 'fe87e5e22ca333b0c751a78bea6fbd6cc156e562' }), h("input", { key: 'b41faddc0e337c7dd2f4ab5948df08a864b38dc8', type: "text", placeholder: 'Enter your ID', ref: el => this.enteredID = el, required: true }), h("br", { key: '0d80b9148c5c11a5622edc8e57a54767e50fb7e9' }), h("label", { key: '211fa69f5ca22d65e5ed35685fd4fb58f7767cd7', htmlFor: "" }, "Mobile *"), h("br", { key: '868c146ed52167d5a5df35b1c1c9d9d97f59bf6a' }), h("input", { key: 'cbd992ceb099cb6f2ad896a1dec06824198c8b6a', type: "tel", placeholder: 'Enter mobile nymber', ref: el => this.enteredMobile = el, minlength: 10, maxlength: 10, required: true }), h("br", { key: '79d7501bb0909348261c3948e1bb0e5dfa073774' }), h("label", { key: '5e902c3476dc142ba2cb806fb123a9d0f9be2060', htmlFor: "" }, "Password *"), h("br", { key: '86cf4448a21042c0a60f9a8a4ce40678bb686a6a' }), h("input", { key: '7286b9ef645f6cebe191b14c604c18bb6fda3999', type: "password", placeholder: 'Enter password', ref: el => this.enteredPassword = el, required: true }), h("br", { key: '8848282f70e993b3ca524aeab1c2a2d2fb881224' }), h("label", { key: '9847f8cf1068f31db9a48d086ca8e8a91d18e770', htmlFor: "" }, "Confirm Password *"), h("br", { key: '93785f2a0b8ac63a1a0cdd6e09effce1d578bbad' }), h("input", { key: '3f2c7cfc1db7567093df2c361d86fc68dd8e0722', type: "password", placeholder: 'Enter password', ref: el => this.enteredConfirmPassword = el, required: true }), " ", h("br", { key: 'ad1209488d3dfe1d2bef69324ed6a6cad463145c' }), h("br", { key: '0440bfe82f37a37a86d98f7f05fe2846d2bdd606' }), h("div", { key: 'd4ba00b4c24a42820f26c20a0734e7f36a58e7ca' }, h("input", { key: '453091d8bbf0bead82c573a03288a38948ec94ca', type: "Submit", onClick: this.validation.bind(this) }), " ", h("button", { key: '3ded2bfc67eeaf9c55f7e40e679a11e5d01379eb', onClick: this.back.bind(this) }, "Back"))))));
    }
};
CdForget.style = cdForgetCss;

export { CdForget as cd_forget };

//# sourceMappingURL=cd-forget.entry.js.map