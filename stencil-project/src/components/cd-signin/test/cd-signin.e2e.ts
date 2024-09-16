import { newE2EPage } from '@stencil/core/testing';

describe('cd-signin', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cd-signin></cd-signin>');

    const element = await page.find('cd-signin');
    expect(element).toHaveClass('hydrated');
  });
});
