import { AnularFormPage } from './app.po';

describe('anular-form App', () => {
  let page: AnularFormPage;

  beforeEach(() => {
    page = new AnularFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
