import { Component } from '@angular/core';
import { ProjectsService } from './data/projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  popupOpen:boolean = false;

  constructor(
    public projects$: ProjectsService,

  ) { }

  ngOnInit() { }

  showForm(bool: boolean) {
    if (bool) {
      this.popupOpen = true;
    }
  };

  hideForm(bool: boolean) {
    if (bool) {
      this.popupOpen = false;
    }
  };
}
