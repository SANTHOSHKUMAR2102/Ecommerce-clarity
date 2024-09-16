import { newSpecPage } from '@stencil/core/testing';
import { AppRout } from '../app-rout';

describe('app-rout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppRout],
      html: `<app-rout></app-rout>`,
    });
    expect(page.root).toEqualHtml(`
      <app-rout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-rout>
    `);
  });
});
