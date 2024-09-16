import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'cd-forget',
  styleUrl: 'cd-forget.css',
  shadow: true,
})
export class CdForget {
  @State() students=localStorage.getItem('studentDetails')?JSON.parse(localStorage.getItem('studentDetails')):[]
  // @State() faculties=localStorage.getItem('facultyDetails')?JSON.parse(localStorage.getItem('facultyDetails')):[]

  enteredID:HTMLInputElement;
  enteredMobile:HTMLInputElement;
  enteredPassword:HTMLInputElement;
  enteredConfirmPassword:HTMLInputElement;
  validation(event:Event){
    event.preventDefault();
    let id=true;
    let mobile=true;
    let password=true;
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
    this.students.map((user: { userID: string; userMobile: string; userPassword: string; })=>{
      if(user.userID==this.enteredID.value.trim()){
        id=false;
        if(user.userMobile==this.enteredMobile.value.trim()){
          mobile=false;
          if(this.enteredPassword.value.trim().length>5 && this.enteredPassword.value.trim()===this.enteredConfirmPassword.value.trim()){
            password=false;
            user.userPassword=this.enteredConfirmPassword.value.trim();
            alert('Success')
            localStorage.setItem('studentDetails',JSON.stringify(this.students));
            location.href='/login'
          }
        }
      }
    })
    if(id) alert('Invalid ID')
    else if(mobile) alert('Invalid mobile umber')
    else if(this.enteredPassword.value.trim().length<5) alert('password length must be 6 character')
    else if(password) alert("Password not matching")
  }
  back(){
    location.href='/login'
  }
  render() {
    return (
      <Host>
        <form action="" id='login-form'>
          <fieldset>
            <label htmlFor="">Enter ID *</label><br />
            <input type="text" placeholder='Enter your ID' ref={el=>this.enteredID=el} required/><br />
            <label htmlFor="">Mobile *</label><br />
            <input type="tel" placeholder='Enter mobile nymber'ref={el=>this.enteredMobile=el} minlength={10} maxlength={10} required  /><br />
            <label htmlFor="">Password *</label><br />
            <input type="password" placeholder='Enter password'ref={el=>this.enteredPassword=el} required/><br />
            <label htmlFor="">Confirm Password *</label><br />
            <input type="password" placeholder='Enter password'ref={el=>this.enteredConfirmPassword=el}required/> <br /><br />
            <div><input type="Submit" onClick={this.validation.bind(this)} /> <button onClick={this.back.bind(this)}>Back</button></div>
          </fieldset>
        </form>
      </Host>
    );
  }
}
