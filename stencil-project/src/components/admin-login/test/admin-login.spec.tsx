import { newSpecPage } from '@stencil/core/testing';
import { AdminLogin } from '../admin-login';

describe('admin-login', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AdminLogin],
      html: `<admin-login></admin-login>`,
    });
    expect(page.root).toEqualHtml(`
      <admin-login>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </admin-login>
    `);
  });
});
