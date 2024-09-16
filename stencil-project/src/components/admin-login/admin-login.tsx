import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'admin-login',
  styleUrl: 'admin-login.css',
  shadow: true,
})
export class AdminLogin {
  @State() adminID:string='';
  @State() adminPassword:string='';
  @State() passwordError:string=null;

  adminId(event:Event):void{
    this.adminID=(event.target as HTMLInputElement).value.trim();
    this.passwordError = "";
  }
  Password(event:Event){
    this.adminPassword=(event.target as HTMLInputElement).value.trim();
    this.passwordError = "";
  }
  onsubmit(event:Event){
    event.preventDefault();
    if(this.adminID!=''&&this.adminPassword!=''){
      this.validateadminDetails(this.adminID,this.adminPassword)
      return;
    }
    alert('Enter the details')
  }
  validateadminDetails(adminID:string,password:string){
    let admindata=JSON.parse(localStorage.getItem('adminData'))
    if(admindata){
      for(let admin of admindata){
        if(adminID===admin.adminID){
          if(password==admin.adminPassword){
            alert("login success");
            localStorage.setItem('adminRefID',admin.adminID)
            location.href='/admin/dashboard'
            return;
          }else {
            alert("Invalid Password")
            console.log('Invalid password error set');
            return;
          }
        } 
      }
    }
    alert('Admin not found')
  }
  render() {
    {console.log("rendering")}
    return (
    
      <Host>
        <nav>
          <h2>Clarity</h2>
          <h3>ADMIN LOGIN</h3>
          <a href="/home/page">HOME</a>
        </nav>
        <h2>Welcome to <span>Clarity Headphones!!</span></h2>
        <h2>LogIn Please</h2>
        <form action="" id='login-form'>
          <fieldset>
            <label htmlFor=""> Admin ID *</label><br />
            <input type="text" placeholder='Enter your ID' onInput={this.adminId.bind(this)} required/><br />
            <label htmlFor="">Password *</label><br />
            <input type="password" placeholder='Enter password' onInput={this.Password.bind(this)} required/>
            <p class={this.passwordError?'invalid-output':'valid'}>{this.passwordError}</p>
            <div class="submit-btn"><input type="Submit" value="LOGIN" onClick={this.onsubmit.bind(this)} /></div>
            <a href="/admin/signin">i don't have a Account goto - SignIn</a>
          </fieldset>
        </form>
        <img src="/assets/BG6.jpg" alt="" />
      </Host>
    );
  }
}
