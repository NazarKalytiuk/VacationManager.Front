import { VavmanPage } from './app.po';

describe('vavman App', () => {
  let page: VavmanPage;

  beforeEach(() => {
    page = new VavmanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
