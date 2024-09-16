import { newSpecPage } from '@stencil/core/testing';
import { ChAbout } from '../ch-about';

describe('ch-about', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ChAbout],
      html: `<ch-about></ch-about>`,
    });
    expect(page.root).toEqualHtml(`
      <ch-about>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ch-about>
    `);
  });
});
