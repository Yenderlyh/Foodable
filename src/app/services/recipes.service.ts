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

  search(ingredients: Array<any>) : Promise<any> {
    const options = {
      withCredentials: true
    };
    ingredients = ingredients.map((ingredient)=>{
        return ingredient.name.toLowerCase();
    });
    const ingredientsString = ingredients.join()
    return this.httpClient.get(`${this.baseUrl}/search?ingredients=${ingredientsString}`, options)
    .toPromise();
  }

}
