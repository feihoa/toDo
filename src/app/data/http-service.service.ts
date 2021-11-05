import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CardsInterface } from './cardsInterface';
import { TasksInterface } from './tasksInterface';
import { catchError, map, tap } from 'rxjs/operators';
import { classToPlain } from 'class-transformer';

@Injectable({
  providedIn: 'root',
})

export class HttpServiceService {
  // private url = 'https://gruesome-catacombs-42254.herokuapp.com';
  private url = 'http://localhost:3000';
  private endPoint = '/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getDataFromApi(): Observable<CardsInterface[]> {
    this.endPoint = '/projects';
    return this.http.get<CardsInterface[]>(this.url + this.endPoint);
  }
  postData(taskToPost: TasksInterface): Observable<TasksInterface> {
    this.endPoint = `/todos`;
    console.log(taskToPost)
    return this.http.post<TasksInterface>(this.url + this.endPoint, taskToPost, this.httpOptions);
  }
  updateData(card:CardsInterface, task: TasksInterface): Observable<TasksInterface> {
    let cardData = classToPlain(card)
    let taskData = classToPlain(task)
    this.endPoint = `/projects/${cardData.id}/todo/${taskData.id}`;
    return this.http.patch<TasksInterface>(this.url + this.endPoint, {task:taskData}, this.httpOptions);
  }
}
