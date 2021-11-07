import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CardsInterface } from './cardsInterface';
import { TasksInterface } from './tasksInterface';
import { classToPlain } from 'class-transformer';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class HttpServiceService {

  constructor(private http: HttpClient) {}

  // private url = 'https://gruesome-catacombs-42254.herokuapp.com';
  private url = 'http://localhost:3000';
  private endPoint = '/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  public getDataFromApi(): Observable<CardsInterface[]> {
    this.endPoint = '/projects';
    return this.http.get<CardsInterface[]>(this.url + this.endPoint)
    .pipe(catchError(this.erroHandler));
  }
  public updateData(cardId:number, task: any): Observable<TasksInterface> {
    this.endPoint = `/projects/${cardId}/todo/${task.task.id}`;
    return this.http.patch<TasksInterface>(this.url + this.endPoint, task, this.httpOptions)
    .pipe(catchError(this.erroHandler));
  }
  public postData(task: any): Observable<CardsInterface> {
    this.endPoint = `/todos`;
    return this.http.post<CardsInterface>(this.url + this.endPoint, task, this.httpOptions)
    .pipe(catchError(this.erroHandler));
  }
  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }
}
