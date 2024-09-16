import { Component, Host, h } from '@stencil/core';
import { createRouter, Route } from 'stencil-router-v2';
const Router = createRouter();

@Component({
  tag: 'app-rout',
})
export class AppRout {
  render() {
    return (
      <Host>
        <Router.Switch>
          <Route path="/">
            <home-page></home-page>
          </Route>
          <Route path="/home/page">
            <home-page></home-page>
          </Route>
          <Route path="/signin">
            <cd-signin></cd-signin>
          </Route>
          <Route path="/admin/signin">
            <admin-signin></admin-signin>
          </Route>
          <Route path="/login">
            <ch-login></ch-login>
          </Route>
          <Route path="/admin/login">
            <admin-login></admin-login>
          </Route>
          <Route path="/product/list">
            <product-list></product-list>
            <shopping-cart></shopping-cart>
          </Route>
          <Route path="/admin/dashboard">
            <admin-dashboard></admin-dashboard>
          </Route>
        </Router.Switch>
      </Host>
    );
  }
}
