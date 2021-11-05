import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardsInterface } from './cardsInterface';


@Injectable({
  providedIn: 'root',
})

export class HttpServiceService {
  // private url = 'https://gruesome-catacombs-42254.herokuapp.com';
  private url = 'http://localhost:3000';
  private endPoint = '/';

  constructor(private http: HttpClient) {}

  getDataFromApi(): Observable<CardsInterface[]> {
    this.endPoint = '/projects';
    return this.http.get<CardsInterface[]>(this.url + this.endPoint);
  }
  postData(taskToPost: CardsInterface): Observable<any> {
    this.endPoint = `/todos`;
    console.log(taskToPost)

    return this.http.post<CardsInterface[]>(this.url + this.endPoint, {task:taskToPost});
  }
  updateData(catId:number, taskToUpdate: CardsInterface): Observable<any> {
    this.endPoint = `/projects/${catId}/todo/${taskToUpdate.id}`;

    return this.http.patch(this.url + this.endPoint, {task:taskToUpdate});
  }
}
