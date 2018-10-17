import { Component, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IngredientsService } from 'src/app/services/ingredients.service';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  results: any[] = [];
  queryField: FormControl = new FormControl();
  error = false;
  terms: string;
  filteredIng: Array<any>;
  selectedIng = [];
  allIngredients = [];
  recipes:any;
  matchingRecipes: [];
  allRecipes = []


  constructor(
    private ingredientsService: IngredientsService,
    private formsModule: FormsModule,
    private recipesService: RecipesService) { }


  ngOnInit() {
// this.queryField.valueChanges
  this.ingredientsService.getAll()
    .then((results) => {
      this.allIngredients = results
    })
    .catch((error) => {
    })  
  }

  updateIng() {
    console.log(this.allIngredients)
    // this.terms = 'terms';
    this.filteredIng = this.allIngredients.filter(ingredient => {
      return ingredient.name === this.terms
    })
    console.log(this.filteredIng)
  }
  removeFromSelection(){
    this.selectedIng.splice(this.selectedIng.indexOf(this.selectedIng))
    this.updateRecipes()
  }

  addToSelection(ingredient){
    this.selectedIng.push(ingredient)
    console.log(this.selectedIng)
    this.updateRecipes();
  }

  updateRecipes() {
    this.recipesService.search(this.selectedIng)
      .then(results => {
        this.recipes = results;
      });
  }

 
}