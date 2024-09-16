import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ch-about',
  styleUrl: 'ch-about.css',
  shadow: true,
})
export class ChAbout {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
