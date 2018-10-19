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
  recipes: any;
  matchingRecipes: [];
  allRecipes = []
  searchValue: String = ''
  clicked = false;
  vegetables: Array<any>;
  fruits: Array<any>;
  grains: Array<any>;
  condiments: Array<any>;
  dairy: Array<any>;
  legumes: Array<any>;
  meat: Array<any>;


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
    .catch ((error) => {
    })
  }

  updateIng() {
    this.filteredIng = this.allIngredients.filter(ingredient => {
      const name = ingredient.name && ingredient.name.toLowerCase();
      const terms = this.terms && this.terms.toLowerCase();
      return terms && name && name.indexOf(terms) !== -1;
    });
    this.filteredIng = this.filteredIng.splice(0, 5);
  }
  removeFromSelection() {
    this.selectedIng.splice(this.selectedIng.indexOf(this.selectedIng))
    this.updateRecipes()
  }

  addToSelection(ingredient) {
    this.selectedIng.push(ingredient)
    this.filteredIng = [];
    this.updateRecipes();
    this.terms = null;
  }

  updateRecipes() {
    this.recipesService.search(this.selectedIng)
      .then(results => {
        this.recipes = results;
      });
  }



}