import { newSpecPage } from '@stencil/core/testing';
import { CdRout } from '../cd-rout';

describe('cd-rout', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CdRout],
      html: `<cd-rout></cd-rout>`,
    });
    expect(page.root).toEqualHtml(`
      <cd-rout>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cd-rout>
    `);
  });
});
