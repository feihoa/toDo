import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from '../data/data-service.service';
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

  allCards: CardsInterface[] = this.tasks.cardsArray;
  cardData :any= [];
  newTodo :any= [];

  @Input() newTask:CardsInterface[] | undefined;

  constructor(
    private tasks: DataServiceService,
    private dataApi: HttpServiceService,

  ) {}

  ngOnInit(): void {
    this.dataApi.getDataFromApi().subscribe({
      next: (data) => {
        this.tasks.setTasks(data);
        this.cardData = plainToClass(CardComponent, this.tasks.cardsArray);
        this.allCards = this.cardData;
        console.log(this.allCards)
      },
      error: (err) => console.log(err),
    });
  }
  onCreate(task:any){
    console.log(task)
  }

}
