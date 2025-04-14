import { browser, by, element } from 'protractor';

describe('Angular People App E2E Tests', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should display the list of people', () => {
    const peopleList = element(by.css('app-person-list'));
    expect(peopleList.isPresent()).toBe(true);
  });

  it('should navigate to edit person page', () => {
    const editButton = element(by.css('app-person-list .edit-button'));
    editButton.click();
    const editPersonHeader = element(by.css('h1'));
    expect(editPersonHeader.getText()).toEqual('Edit Person');
  });

  it('should delete a person', () => {
    const deleteButton = element(by.css('app-person-list .delete-button'));
    deleteButton.click();
    const confirmDeleteButton = element(by.css('app-person-delete .confirm-delete'));
    confirmDeleteButton.click();
    const peopleList = element(by.css('app-person-list'));
    expect(peopleList.isPresent()).toBe(true);
  });
});