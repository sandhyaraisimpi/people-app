import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.scss']
})
export class PersonDeleteComponent implements OnInit {
  personId: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) {}

  ngOnInit() {
    this.personId = +this.route.snapshot.paramMap.get('id');
  }

  confirmDelete() {
    this.personService.deletePerson(this.personId).subscribe(() => {
      this.router.navigate(['/people']);
    });
  }

  cancel() {
    this.router.navigate(['/people']);
  }
}