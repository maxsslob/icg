import { IcgPage } from './app.po';

describe('icg App', function() {
  let page: IcgPage;

  beforeEach(() => {
    page = new IcgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
