import { Injectable } from '@angular/core';
import { Subscription, BehaviorSubject } from 'rxjs';
import { CardsInterface } from './cardsInterface';
import { TasksInterface } from './tasksInterface';
import { plainToClass } from 'class-transformer';
import { classToPlain } from 'class-transformer';
import { HttpServiceService } from './http-service.service';

@Injectable()
export class ProjectsService {

  projects$: BehaviorSubject<Array<CardsInterface>>;
  projectsSub$!: Subscription;

  constructor(
    private api: HttpServiceService
  ) {
    this.projects$ = new BehaviorSubject<Array<CardsInterface>>([]);
  }

  getCards = (): BehaviorSubject<Array<CardsInterface>> => {

    if (this.projects$.getValue().length <= 0 && !this.projectsSub$) {
        this.projectsSub$ = this.api.getDataFromApi().subscribe(
            result => {
              const cards = plainToClass(CardsInterface, result)
                this.projects$.next(cards);
                this.projectsSub$.unsubscribe();
            },
            error => console.error(error)
        );
      }
    return this.projects$;
  }

  checkTask = (card:CardsInterface, task: TasksInterface) => {

    let cardData = classToPlain(card)
    let taskData = classToPlain(task)

    this.projectsSub$ = this.api.updateData(cardData.id, {task:taskData}).subscribe(
      result => {
        const task = plainToClass(TasksInterface, result)
           this.projects$.getValue().forEach((item) => {
            item.todos.forEach((el:TasksInterface) => {
              if(el.id == task.id){
                el.isCompleted = task.isCompleted
                return
              }
            })
          })
           this.projectsSub$.unsubscribe();
      },
      error => console.error(error)
    );
    return this.projects$;
  }

  addCard = (task:TasksInterface) => {

    const taskData = classToPlain(task)

    this.projectsSub$ = this.api.postData({task:taskData}).subscribe(
        result => {
          const card = plainToClass(CardsInterface, result)

          let exists:boolean=false;
          this.projects$.getValue().forEach((item) => {
            if(item.title == card.title){
              exists = true;
              item.todos.push(card.todos[0])
            return
            }
          })
          if(!exists){
            this.projects$.getValue().push(card)
          }
          this.projectsSub$.unsubscribe();
        },
        error => console.error(error)
    );
    return this.projects$;
  }

}
