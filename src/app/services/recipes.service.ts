import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private API_URL = environment.apiUrl + '/recipes';


  constructor(private httpClient: HttpClient,
   ) { }

  
  getAll(): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}`, options)
      .toPromise();
  }

  getOne(id: string): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/${id}`, options)
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
    return this.httpClient.get(`${this.API_URL}/search?ingredients=${ingredientsString}`, options)
    .toPromise();
  }

}
