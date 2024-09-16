import { newSpecPage } from '@stencil/core/testing';
import { ChLogin } from '../ch-logout';

describe('ch-logout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ChLogin],
      html: `<ch-logout></ch-logout>`,
    });
    expect(page.root).toEqualHtml(`
      <ch-logout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ch-logout>
    `);
  });
});
