import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'admin-signin',
  styleUrl: 'admin-signin.css',
  shadow: true,
})
export class AdminSignin {
  @State() adminName:string;
  @State() mobileNumber:string;
  @State() adminID:string;
  @State() adminPassword:string;
  @State() confirmPassword:string;
  

  // error message
  @State() nameError:string=null;
  @State() mobileNumberError:string=null;
  @State() adminIdError:string=null;
  @State() passwordError:string=null;
  
  nameValidation(event:Event){
    this.adminName= (event.target as HTMLInputElement).value.trim();
    if(this.adminName.length==0)
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
  adminIDValidation(event:Event){
    this.adminID= (event.target as HTMLInputElement).value.trim();
    if(this.adminID.length==0)
    {
      this.adminIdError = 'ID reruired';
      return false;
    }
    this.adminIdError = '';
  }
  passwords(event:Event){
    this.adminPassword= (event.target as HTMLInputElement).value.trim();
    if(this.adminPassword.length<5)
    {
      this.passwordError = 'password must be atleast 6 characters long';
      return false;
    }
    this.passwordError = null;
    if(this.confirmPassword !==this.adminPassword){
      this.passwordError = 'password not matching';
      return false;
    }
    this.passwordError = '';
  }
  passwordValidation(event:Event){
    console.log("mathod called")
    this.confirmPassword= (event.target as HTMLInputElement).value.trim();
    if(this.adminPassword.length<5)
    {
      this.passwordError = 'password must be atleast 6 characters long';
      return false;
    }
    else if(this.confirmPassword !==this.adminPassword){
      this.passwordError = 'password not matching';
      return false;
    }
    this.passwordError = '';
    
  }
  onsubmit(){
   if(this.passwordError==''&&this.adminIdError==''&&this.nameError==''&&this.mobileNumberError=='')  {
    this.stroreDetails(this.adminName,this.mobileNumber,this.adminID,this.adminPassword)
  }
    else{
      alert("enter required details")
      return;
    } 
    
  }
  stroreDetails(name:string,mobile:string,Id:string,password:string){
    let adminData=localStorage.getItem('adminData')?JSON.parse(localStorage.getItem('adminData')):[];
    if(!this.validateRegister(Id)){
      return;
    }
    let adminDetails={
                      adminName: name,
                      adminMobile: mobile,
                      adminID: Id,
                      adminPassword: password,
                    }
      adminData.push(adminDetails);
      localStorage.setItem("adminData",JSON.stringify(adminData))
      alert("registartion successful");
      location.href='/admin/login'
  }
  validateRegister(id:string):boolean{
    let adminData=JSON.parse(localStorage.getItem('adminData'))
    if(adminData){
      for(let item of adminData){
        if(item.adminID===id){
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
          <h3>ADMIN PAGE</h3>
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
          <label htmlFor="">admin ID *</label>
          <input type="text"placeholder='Enter ID'onInput={(event)=>this.adminIDValidation(event)} required/>
          <p class={this.adminIdError?'invalid-output':'valid'}>{this.adminIdError}</p>
          
          <label htmlFor="">Password *</label>
          <input type="password" placeholder='Enter password' onInput={(event)=>this.passwords(event)} required/><br />
          <label htmlFor="">Confirm password *</label>
          <input type="password" placeholder='Confirm password'onClick={(event)=>this.passwordValidation(event)} onInput={(event)=>this.passwordValidation(event)} required/>
          <p class={this.passwordError?'invalid-output':'valid'}>{this.passwordError}</p>
          <div class="submit-btn"><input id='submit' type="button" value='SignIn' onClick={this.onsubmit.bind(this)} /></div>
          <a href="/admin/login">I have already Accout - Login</a>
        </fieldset>
      </form>
      <img src="/assets/BG4.jpg" alt="" />
      </Host>
    );
  }
}
