import { CrudDuranteOCursoPage } from './app.po';

describe('crud-durante-o-curso App', () => {
  let page: CrudDuranteOCursoPage;

  beforeEach(() => {
    page = new CrudDuranteOCursoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
