import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CardsInterface } from './cardsInterface';
import { TasksInterface } from './tasksInterface';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class ApiService {

  constructor(private http: HttpClient) {}

  private url = isDevMode() ? 'http://localhost:3000' : 'https://gruesome-catacombs-42254.herokuapp.com';

  private endPoint = '/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  public getDataFromApi(): Observable<CardsInterface[]> {
    this.endPoint = '/projects';
    return this.http.get<CardsInterface[]>(this.url + this.endPoint)
      .pipe(catchError(this.erroHandler));
  }
  public updateData(cardId: number, task: any): Observable<TasksInterface> {
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
