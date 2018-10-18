import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
  private API_URL = environment.apiUrl + '/ingredients';


  constructor(private httpClient: HttpClient) { }

  getAll(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}`, options)
      .toPromise();
  }
}