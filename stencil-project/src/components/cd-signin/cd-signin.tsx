import { Component, Host, h, State } from '@stencil/core';


@Component({
  tag: 'cd-signin',
  styleUrl: 'cd-signin.css',
  shadow: true,
})
export class CdSignin {
  @State() userName:string;
  @State() mobileNumber:string;
  @State() userID:string;
  @State() userPassword:string;
  @State() confirmPassword:string;

  // error message
  @State() nameError:string=null;
  @State() mobileNumberError:string=null;
  @State() userIdError:string=null;
  @State() passwordError:string=null;
  
  nameValidation(event:Event){
    this.userName= (event.target as HTMLInputElement).value.trim();
    if(this.userName.length==0)
    {
      this.nameError = 'name is required';
      return false;
    }
    this.nameError = '';
  }
  mobileValidation(event:Event){
    this.mobileNumber= (event.target as HTMLInputElement).value.trim();
    if(this.mobileNumber.length!=10)
    {
      this.mobileNumberError = 'mobile number must contain 10 digit';
      return false;
    }
    this.mobileNumberError = '';
  }
  userIDValidation(event:Event){
    this.userID= (event.target as HTMLInputElement).value.trim();
    if(this.userID.length==0)
    {
      this.userIdError = 'ID reruired';
      return false;
    }
    this.userIdError = '';
  }
  passwords(event:Event){
    this.userPassword= (event.target as HTMLInputElement).value.trim();
    if(this.userPassword.length<5)
    {
      this.passwordError = 'password must be atleast 6 characters long';
      return false;
    }
    this.passwordError = null;
    if(this.confirmPassword !==this.userPassword){
      this.passwordError = 'password not matching';
      return false;
    }
    this.passwordError = '';
  }
  passwordValidation(event:Event){
    console.log("mathod called")
    this.confirmPassword= (event.target as HTMLInputElement).value.trim();
    if(this.userPassword.length<5)
    {
      this.passwordError = 'password must be atleast 6 characters long';
      return false;
    }
    else if(this.confirmPassword !==this.userPassword){
      this.passwordError = 'password not matching';
      return false;
    }
    this.passwordError = '';
    
  }
  onsubmit(){
   if(this.passwordError==''&&this.userIdError==''&&this.nameError==''&&this.mobileNumberError=='')  {
    this.stroreDetails(this.userName,this.mobileNumber,this.userID,this.userPassword)
  }
    else{
      alert("enter required details")
      return;
    } 
    
  }
  stroreDetails(name:string,mobile:string,Id:string,password:string){
    let userData=localStorage.getItem('userData')?JSON.parse(localStorage.getItem('userData')):[];
    if(!this.validateRegister(Id)){
      return;
    }
    let userDetails={
                      userName: name,
                      userMobile: mobile,
                      userID: Id,
                      userPassword: password,
                    }
      userData.push(userDetails);
      localStorage.setItem("userData",JSON.stringify(userData))
      alert("registartion successful");
      location.href='/login'
  }
  validateRegister(id:string):boolean{
    let userData=JSON.parse(localStorage.getItem('userData'))
    if(userData){
      for(let item of userData){
        if(item.userID===id){
          if(confirm(`This ${id} ID already registerd!.. Do you want to login`)) location.href='/login'
          return false;
        }
      }
    }
    return true;
  }
  render() {
    return (
      <Host>
        <nav>
          <h2>Clarity</h2>
          <a href="/home/page">HOME</a>
        </nav>
           <h2 class="sign-title">SignUp Please</h2>
        <form action="" id='register-form'>

        <fieldset>
          <label htmlFor="">Name *</label>
          <input type="text" placeholder='Enter your name'  onInput={(event)=>this.nameValidation(event)} required/>
          <p class={this.nameError?'invalid-output':'valid'}>{this.nameError}</p>
          <label htmlFor="">Mobile *</label>
          <input type="tel"placeholder='Enter mobile number' onInput={(event)=>this.mobileValidation(event)} required/>
          <p class={this.mobileNumberError?'invalid-output':'valid'}>{this.mobileNumberError}</p>
          <label htmlFor="">User ID *</label>
          <input type="text"placeholder='Enter ID'onInput={(event)=>this.userIDValidation(event)} required/>
          <p class={this.userIdError?'invalid-output':'valid'}>{this.userIdError}</p>
          
          <label htmlFor="">Password *</label>
          <input type="password" placeholder='Enter password' onInput={(event)=>this.passwords(event)} required/><br />
          <label htmlFor="">Confirm password *</label>
          <input type="password" placeholder='Confirm password'onClick={(event)=>this.passwordValidation(event)} onInput={(event)=>this.passwordValidation(event)} required/>
          <p class={this.passwordError?'invalid-output':'valid'}>{this.passwordError}</p>
          <div class="submit-btn"><input id='submit' type="button" value='SIGNIN' onClick={this.onsubmit.bind(this)} /></div>
          <a href="/login">I have already Accout - Login</a>
        </fieldset>
      </form>
      <img src="/assets/BG2.jpg" alt="" />
      </Host>
    );
  }
}
