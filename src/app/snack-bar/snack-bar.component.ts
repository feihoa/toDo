import { Component, OnInit, Input } from '@angular/core';
import { ProjectsService } from '../data/projects.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {
  @Input() message:boolean = true;

  constructor(
    public projects: ProjectsService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {

    this.openSnackBar()
  }
  openSnackBar() {
    this._snackBar.open('Произошла ошибка', '', {duration: 2000});
  }
}
