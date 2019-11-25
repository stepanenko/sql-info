import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html'
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
