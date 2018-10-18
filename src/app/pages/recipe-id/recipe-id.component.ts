import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';

import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-recipe-id',
  templateUrl: './recipe-id.component.html',
  styleUrls: ['./recipe-id.component.scss']
})
export class RecipeIdComponent implements OnInit {

  recipes: any;
  id: string;
  error = false;
  isIngredients = true;
  isSteps = false;


  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.id = params.id;
        this.recipesService.getOne(this.id)
          .then((result) => {
            this.recipes = result;
          })
          .catch((error) => {
            this.error = true;
          })
      })
  }
  handleIngredientsClick() {
    this.isIngredients = true;
    this.isSteps = false;
  }

  handleStepsClick() {
    this.isSteps = true;
    this.isIngredients = false;
  }
}

