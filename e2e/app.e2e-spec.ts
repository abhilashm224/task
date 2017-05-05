import { LnpAppPage } from './app.po';

describe('lnp-app App', () => {
  let page: LnpAppPage;

  beforeEach(() => {
    page = new LnpAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
