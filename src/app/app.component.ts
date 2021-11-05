import { Component} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpServiceService } from './data/http-service.service';
import { CardsInterface } from './data/cardsInterface';
import { TasksInterface } from './data/tasksInterface';
import { plainToClass} from 'class-transformer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  popupOpen = false;
  // newTask:TasksInterface[] = []

  constructor(
    private dataApi: HttpServiceService,
    private http: HttpClient)
    {}

  ngOnInit(){

  }
  showForm(bool:boolean) {
    if (bool){
      this.popupOpen = true;
    }
  };
  hideForm(bool:boolean) {
    if (bool){
      this.popupOpen = false;
    }
  };
  onSubmit(data:any){
    // this.dataApi.postData(data).subscribe((data) => {
    //   // this.newTask = plainToClass(CardComponent, data);

    // this.newTask = data
    // console.log(data)
    // this.tasks.createTask(data)

    // });
  }

}
