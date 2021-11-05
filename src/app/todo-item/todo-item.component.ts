import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})


export class TodoItemComponent implements OnInit {

  // id:number = 1;
  // text:string = 'Заменить масло в двигателе до 23 апреля';
  // isCompleted:boolean = false;

  @Input() id:number | undefined;
  @Input() catId:number | undefined;
  @Input() text:string | undefined;
  @Input() isCompleted:boolean | undefined;

  ngOnInit(): void {

  }


}
