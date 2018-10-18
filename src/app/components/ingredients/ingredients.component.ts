import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';

import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})

export class IngredientsComponent implements OnInit {
  recipes: any;
  id: string;
  error = false;


  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute) { }

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
}
