import { ParkRPage } from './app.po';

describe('park-r App', () => {
  let page: ParkRPage;

  beforeEach(() => {
    page = new ParkRPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
