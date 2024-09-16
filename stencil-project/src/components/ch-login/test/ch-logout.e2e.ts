import { newE2EPage } from '@stencil/core/testing';

describe('ch-logout', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ch-logout></ch-logout>');

    const element = await page.find('ch-logout');
    expect(element).toHaveClass('hydrated');
  });
});
