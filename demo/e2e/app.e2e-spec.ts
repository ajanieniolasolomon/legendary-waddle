import { NewsApiDemoPage } from './app.po';

describe('news-api-demo App', () => {
  let page: NewsApiDemoPage;

  beforeEach(() => {
    page = new NewsApiDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
