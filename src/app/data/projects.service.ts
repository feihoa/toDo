import { Injectable } from '@angular/core';
import { Observable, of, Subscription, BehaviorSubject } from 'rxjs';
import { CardsInterface } from './cardsInterface';
import { TasksInterface } from './tasksInterface';
import { plainToClass } from 'class-transformer';
import { HttpServiceService } from './http-service.service';

@Injectable()
export class ProjectsService {
  projects$: BehaviorSubject<Array<any >>;
  projectsSub$!: Subscription;
  todo:TasksInterface[];

  constructor(
    private api: HttpServiceService
  ) {
    this.projects$ = new BehaviorSubject<Array<any>>([]);
    this.todo = []
  }

  getCards = (): BehaviorSubject<Array<CardsInterface>> => {
    if (this.projects$.getValue().length <= 0 && !this.projectsSub$) {
        this.projectsSub$ = this.api.getDataFromApi().subscribe(
            result => {
                this.projects$.next(result);
                this.projectsSub$.unsubscribe();
            },
            error => console.error(error)
        );
      }
    return this.projects$;
  }

  addCard = (data:TasksInterface) => {
    this.projectsSub$ = this.api.postData(data).subscribe(
        result => {
          let exists:boolean=false;
          let res:any = result;
          this.projects$.getValue().forEach(item => {
            if(item.title == res.title){
              exists = true;
              item.todos.push(res.todos[0])
            return
            }
          })
          if(!exists){
            this.projects$.getValue().push(result)
          }
          this.projectsSub$.unsubscribe();
        },
        error => console.error(error)
    );
    return this.todo;
  }
  checkTask = (data1:CardsInterface, data2: TasksInterface,) => {
    this.projectsSub$ = this.api.updateData(data1, data2).subscribe(
      result => {
           this.projects$.getValue().forEach((item) => {
            item.todos.forEach((el:TasksInterface) => {
              if(el.id == result.id){
                el.isCompleted = result.isCompleted
                return
              }
            })
          })
           this.projectsSub$.unsubscribe();
      },
      error => console.error(error)
    );
  }
}
