import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.css',
  shadow: true,
})
export class HomePage {
  @Prop({reflect: true, mutable:true}) open: Boolean;
  btnOpen(){
    this.open =!this.open;
  }
  render() {
    return (
      <body>
        <a href="/about" class="about">ABOUT</a>
        <div class="caption">
          <h1 class="title">Clarity Headphones!!</h1>
          <h2>"Unlock the Ultimate Audio Experience with Clarity Headphones"</h2>
          <a href="/signin" class="login-btn-container">
            <p>User</p>
            <button class="login-btn">LOGIN</button>
          </a>
          <a href="/admin/signin" class="login-btn-container">
            <p>Admin</p>
            <button class="login-btn">LOGIN</button>
          </a>
          
        </div>
        <img src="/assets/bg.jpg" alt="" />
      </body>
    );
  }
}
