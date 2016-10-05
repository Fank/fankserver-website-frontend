import { FankserverWebsiteFrontendPage } from './app.po';

describe('fankserver-website-frontend App', function() {
  let page: FankserverWebsiteFrontendPage;

  beforeEach(() => {
    page = new FankserverWebsiteFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
