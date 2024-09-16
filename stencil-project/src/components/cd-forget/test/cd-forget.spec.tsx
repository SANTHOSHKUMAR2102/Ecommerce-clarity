import { newSpecPage } from '@stencil/core/testing';
import { CdForget } from '../cd-forget';

describe('cd-forget', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CdForget],
      html: `<cd-forget></cd-forget>`,
    });
    expect(page.root).toEqualHtml(`
      <cd-forget>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cd-forget>
    `);
  });
});
