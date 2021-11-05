import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpServiceService } from '../data/http-service.service';
import { CardsInterface } from '../data/cardsInterface';
import { plainToClass } from 'class-transformer';
import { classToPlain } from 'class-transformer';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  constructor(
    private dataApi: HttpServiceService,

  ) {}


  @Output() onChanged = new EventEmitter()
  @Input() card:any | undefined;
  @Input() title:string | undefined;
  @Input() catId:number | undefined;

  allTasks: CardsInterface[] = [];

  taskData :any= [];


  ngOnInit(): void {

    this.taskData = plainToClass(TodoItemComponent, this.card.todos);
    this.allTasks = this.taskData;
  }
  checked(catId:any, task:any) {
    console.log(catId, task)
    task = classToPlain(task)
    this.dataApi.updateData(catId, task).subscribe(
      (result) => (result),
      (error) => console.log( error)
    );
  }

}
