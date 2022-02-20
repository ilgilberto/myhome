import { MyhomePage } from './app.po';

describe('myhome App', function() {
  let page: MyhomePage;

  beforeEach(() => {
    page = new MyhomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
