import { newE2EPage } from '@stencil/core/testing';

describe('app-rout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-rout></app-rout>');

    const element = await page.find('app-rout');
    expect(element).toHaveClass('hydrated');
  });
});
