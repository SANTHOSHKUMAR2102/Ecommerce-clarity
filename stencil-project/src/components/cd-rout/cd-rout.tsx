import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'cd-rout',
  styleUrl: 'cd-rout.css',
  shadow: true,
})
export class CdRout {
  render() {
    return (
      <Host>
        <cd-line></cd-line>
      </Host>
    );
  }
}
