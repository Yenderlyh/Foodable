import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private baseUrl = 'http://localhost:3000/ingredients';

  constructor(private httpClient: HttpClient) { }

  getAll(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}`, options)
      .toPromise();
  }
}