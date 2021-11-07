import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  popupOpen = false;

  constructor() { }

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
