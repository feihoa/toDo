import { Injectable } from "@angular/core";
import { CardsInterface } from "./cardsInterface";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class DataServiceService {
  card:CardsInterface[] = [];

  cardsArray: CardsInterface[] = [];

  index: number=0;

  constructor() {}

  getTasks() {
    // return this.cardsArray.push(this.card);
  }
  setTasks(cards: CardsInterface[]): void {

    this.cardsArray = [...cards];

  }
  createTask(card: any) {
   return this.cardsArray.push(card);
  }

}
