import { newSpecPage } from '@stencil/core/testing';
import { CdSignin } from '../cd-signin';

describe('cd-signin', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CdSignin],
      html: `<cd-signin></cd-signin>`,
    });
    expect(page.root).toEqualHtml(`
      <cd-signin>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cd-signin>
    `);
  });
});
