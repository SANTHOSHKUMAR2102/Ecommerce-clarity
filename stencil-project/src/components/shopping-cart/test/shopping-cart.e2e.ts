import { newE2EPage } from '@stencil/core/testing';

describe('shopping-cart', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<shopping-cart></shopping-cart>');

    const element = await page.find('shopping-cart');
    expect(element).toHaveClass('hydrated');
  });
});
