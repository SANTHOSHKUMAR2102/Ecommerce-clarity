import { newSpecPage } from '@stencil/core/testing';
import { AdminSignin } from '../admin-signin';

describe('admin-signin', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AdminSignin],
      html: `<admin-signin></admin-signin>`,
    });
    expect(page.root).toEqualHtml(`
      <admin-signin>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </admin-signin>
    `);
  });
});
