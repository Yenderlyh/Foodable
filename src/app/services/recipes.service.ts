import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';

const apiUrl = `${environment.apiUrl}+/services`;


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: any;
  private baseUrl = `${environment.apiUrl}+/services`;


  private API_URL = `${environment.apiUrl}+/recipes`;

  constructor(private httpClient: HttpClient) { }
  
  getAll(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}`, options)
      .toPromise();
  }
  getOne(id: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/${id}`, options)
      .toPromise();
  }
}
