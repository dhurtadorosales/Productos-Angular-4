import { ProyectoPage } from './app.po';

describe('proyecto App', () => {
  let page: ProyectoPage;

  beforeEach(() => {
    page = new ProyectoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
