import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private baseUrl = 'http://localhost:3000/recipes';


  constructor(private httpClient: HttpClient,
   ) { }

//   search(queryString: string) {
//     let _URL = this.baseUrl + queryString;
//     return this.httpClient.get(_URL);
// }
  
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
  getList(searchString: string) : Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.baseUrl}/search?ingredient=${searchString}`, options)
    .toPromise();  }

}
