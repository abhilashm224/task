import { TaskManagePage } from './app.po';

describe('lnp-app App', () => {
  let page: TaskManagePage;

  beforeEach(() => {
    page = new TaskManagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
