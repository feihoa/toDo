import { Component, OnInit, Input } from '@angular/core';
import { CardsInterface } from '../data/cardsInterface';
import { TasksInterface } from '../data/tasksInterface';
import { ProjectsService } from '../data/projects.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Input() catId !: number;
  @Input() card !: any;

  constructor(
    public projects: ProjectsService,
  ) { }

  ngOnInit(): void {
  }

  checked(card: CardsInterface, task: TasksInterface) {
    this.projects.checkTask(card, task)
  }
}
