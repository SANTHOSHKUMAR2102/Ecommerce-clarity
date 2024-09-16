import { newE2EPage } from '@stencil/core/testing';

describe('ch-about', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ch-about></ch-about>');

    const element = await page.find('ch-about');
    expect(element).toHaveClass('hydrated');
  });
});
