import { TiiHeroesPage } from './app.po';

describe('tii-heroes App', () => {
  let page: TiiHeroesPage;

  beforeEach(() => {
    page = new TiiHeroesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
