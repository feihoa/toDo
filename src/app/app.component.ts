import { Component } from '@angular/core';
import { ProjectsService } from './data/projects.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  popupOpen: boolean = false;

  constructor(
    public projects$: ProjectsService,
  ) { }

  ngOnInit() {}

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
