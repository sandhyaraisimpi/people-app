import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
  people: any[] = [];

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.fetchPeople();
  }

  fetchPeople() {
    this.personService.getAllPeople().subscribe(data => {
      this.people = data;
    });
  }

  deletePerson(id: number) {
    this.personService.deletePerson(id).subscribe(() => {
      this.fetchPeople();
    });
  }
}