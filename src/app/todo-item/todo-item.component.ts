import { Component, OnInit, Input } from '@angular/core';
import { TasksInterface } from '../data/tasksInterface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})


export class TodoItemComponent implements OnInit {

  @Input() task !:TasksInterface;
  @Input() catId !:number;

  ngOnInit(): void {
  }
}
