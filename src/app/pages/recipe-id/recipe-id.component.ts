import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';


@Component({
  selector: 'app-recipe-id',
  templateUrl: './recipe-id.component.html',
  styleUrls: ['./recipe-id.component.scss']
})
export class RecipeIdComponent implements OnInit {
  title: string;
  picture: string;
  preparation: string;
  recipes: any;
  id : string;

  constructor(
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
      this.recipesService.getOne(this.id)
        .then((results) => {
          console.log(results)
          this.recipes = results
        })
  }

}
