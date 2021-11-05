import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpServiceService } from '../data/http-service.service';
import { CardsInterface } from '../data/cardsInterface';
import { TasksInterface } from '../data/tasksInterface';
import { plainToClass } from 'class-transformer';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  allTasks !: CardsInterface;
  taskData !: any;

  @Output() onChanged = new EventEmitter()
  @Input() card !:CardsInterface;

  constructor(
    private httpServiceService: HttpServiceService,
  ) {}

  ngOnInit(): void {
    this.taskData = plainToClass(TodoItemComponent, this.card.todos);
  }
  checked(card:CardsInterface, task:TasksInterface) {
    this.httpServiceService.updateData(card, task).subscribe(
      (result) => (result),
      (error) => console.log( error)
    );
  }
}
