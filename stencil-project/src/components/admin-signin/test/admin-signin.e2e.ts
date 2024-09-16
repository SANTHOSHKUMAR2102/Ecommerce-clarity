import { newE2EPage } from '@stencil/core/testing';

describe('admin-signin', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<admin-signin></admin-signin>');

    const element = await page.find('admin-signin');
    expect(element).toHaveClass('hydrated');
  });
});
