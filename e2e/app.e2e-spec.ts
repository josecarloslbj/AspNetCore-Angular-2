import { TodoappAngular2Page } from './app.po';

describe('todoapp-angular2 App', function() {
  let page: TodoappAngular2Page;

  beforeEach(() => {
    page = new TodoappAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
