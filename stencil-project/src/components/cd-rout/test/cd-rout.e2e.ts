import { newE2EPage } from '@stencil/core/testing';

describe('cd-rout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cd-rout></cd-rout>');

    const element = await page.find('cd-rout');
    expect(element).toHaveClass('hydrated');
  });
});
