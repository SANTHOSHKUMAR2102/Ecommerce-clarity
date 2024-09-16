import { newE2EPage } from '@stencil/core/testing';

describe('cd-forget', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cd-forget></cd-forget>');

    const element = await page.find('cd-forget');
    expect(element).toHaveClass('hydrated');
  });
});
