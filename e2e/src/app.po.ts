export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText();
  }

  getPeopleList() {
    return element.all(by.css('.people-list'));
  }

  getEditButtonForPerson(personName: string) {
    return element(by.cssContainingText('.edit-button', personName));
  }

  getDeleteButtonForPerson(personName: string) {
    return element(by.cssContainingText('.delete-button', personName));
  }

  getConfirmationMessage() {
    return element(by.css('.confirmation-message')).getText();
  }
}