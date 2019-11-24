import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <button (click)="onClick()" class="btn btn-primary" [class.active]="isActive">
      Save
    </button>
    <hr>
    <input #email (keyup.enter)="enter(email.value)" />
    <hr>
    <input [(ngModel)]="mail" (keyup.enter)="twoway()" />
  `
})
export class CoursesComponent {
  title = 'The List of Courses';
  courses;
  isActive = true;
  mail;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onClick() {
    console.log('Clicked');
  }

  enter(email) {
    console.log(email);
  }

  twoway() {
    console.log(this.mail);
  }
}
