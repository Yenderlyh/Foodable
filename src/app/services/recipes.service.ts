import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: any;
  private baseUrl = 'http://localhost:3000/recipes';



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
