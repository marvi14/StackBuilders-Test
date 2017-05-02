import { StackbuildersTestPage } from './app.po';

describe('stackbuilders-test App', () => {
  let page: StackbuildersTestPage;

  beforeEach(() => {
    page = new StackbuildersTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
