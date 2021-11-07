import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../data/projects.service';


@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {

  constructor(
    public projects$: ProjectsService,
  ) { }


  ngOnInit(): void {
  }

}
