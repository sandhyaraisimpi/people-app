import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonListComponent } from './person-list.component';
import { PersonService } from '../../services/person.service';
import { of } from 'rxjs';

describe('PersonListComponent', () => {
  let component: PersonListComponent;
  let fixture: ComponentFixture<PersonListComponent>;
  let personService: jasmine.SpyObj<PersonService>;

  beforeEach(() => {
    const personServiceSpy = jasmine.createSpyObj('PersonService', ['getAllPeople', 'deletePerson']);

    TestBed.configureTestingModule({
      declarations: [ PersonListComponent ],
      providers: [
        { provide: PersonService, useValue: personServiceSpy }
      ]
    });

    fixture = TestBed.createComponent(PersonListComponent);
    component = fixture.componentInstance;
    personService = TestBed.inject(PersonService) as jasmine.SpyObj<PersonService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch people on init', () => {
    const expectedPeople = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
    personService.getAllPeople.and.returnValue(of(expectedPeople));

    component.ngOnInit();

    expect(component.people).toEqual(expectedPeople);
    expect(personService.getAllPeople).toHaveBeenCalled();
  });

  it('should delete a person', () => {
    const personId = 1;
    personService.deletePerson.and.returnValue(of({}));

    component.deletePerson(personId);

    expect(personService.deletePerson).toHaveBeenCalledWith(personId);
  });
});