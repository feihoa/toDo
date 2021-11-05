import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { HttpServiceService } from '../data/http-service.service';
import { CardsInterface } from '../data/cardsInterface';
import { plainToClass } from 'class-transformer';
import { CardComponent } from '../card/card.component';


@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {

  allCards !: CardsInterface[];
  cardsData :any= [];
  newTodo :any= [];

  // @Input() newTask:CardsInterface[] | undefined;

  constructor(
    private httpServiceService: HttpServiceService,
  ) {}

  getTasks(){
    this.httpServiceService.getDataFromApi().subscribe({
      next: (data) => {
        this.cardsData = plainToClass(CardComponent, data);
        console.log(this.cardsData)
      },
      error: (err) => console.log(err),
    });
  }
  ngOnInit(): void {
    this.getTasks();
  }
  onCreate(task:any){
    console.log(task)
  }

}
