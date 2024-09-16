import { newSpecPage } from '@stencil/core/testing';
import { ShoppingCart } from '../shopping-cart';

describe('shopping-cart', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ShoppingCart],
      html: `<shopping-cart></shopping-cart>`,
    });
    expect(page.root).toEqualHtml(`
      <shopping-cart>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </shopping-cart>
    `);
  });
});
