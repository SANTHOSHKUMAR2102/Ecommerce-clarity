import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'ch-login',
  styleUrl: 'ch-logout.css',
  shadow: true,
})



export class ChLogin {
  @State() userID:string='';
  @State() userPassword:string='';

  userId(event:Event):void{
    this.userID=(event.target as HTMLInputElement).value.trim();
  }
  Password(event:Event){
    this.userPassword=(event.target as HTMLInputElement).value.trim();
  }
  onsubmit(event:Event){
    event.preventDefault();
    if(this.userID!=''&&this.userPassword!=''){
      this.validateUserDetails(this.userID,this.userPassword)
      return;
    }
    alert('enter the details')
  }
  validateUserDetails(userID:string,password:string){
    let userdata=JSON.parse(localStorage.getItem('userData'))
    for(let user of userdata){
      if(userID===user.userID){
        if(password==user.userPassword){
          alert("login success");
          localStorage.setItem('userRefID',user.userID)
          location.href='/product/list'
          return;
        }else {
          alert('Invalid Password')
          return;
        }
      } 
    }
    alert('User not found')
  }
  render() {
    {console.log("rendering")}
    return (
    
      <Host>
        <nav>
          <h2>Clarity</h2>
          <a href="/home/page">HOME</a>
        </nav>
        <h2>Welcome to <span>Clarity Headphones!!</span></h2>
        <h2>LogIn Please</h2>
        <form action="" id='login-form'>
          <fieldset>
            <label htmlFor=""> User ID *</label><br />
            <input type="text" placeholder='Enter your ID' onInput={this.userId.bind(this)} required/><br />
            <label htmlFor="">Password *</label><br />
            <input type="password" placeholder='Enter password' onInput={this.Password.bind(this)} required/><br /><br />
            <div class="submit-btn"><input type="Submit" value="LOGIN" onClick={this.onsubmit.bind(this)} /></div>
            <a href="/signin">i don't have a Account goto - SignIn</a>
          </fieldset>
        </form>
        <img src="/assets/BG3.avif" alt="" />
      </Host>
    );
  }
}
