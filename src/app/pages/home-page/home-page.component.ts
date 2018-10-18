import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  title: string;
  picture: string;
  preparation: string;
  recipes: any;
  filteredRecipes: any;

  constructor(
    private recipesService: RecipesService,
  ) { }


  ngOnInit() {
    this.recipesService.getAll()
      .then((results) => {
        function shuffle(results) {
          results.filter((result) => {
            result.title === 'comida'
          });
          for (let i = results.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [results[i], results[j]] = [results[j], results[i]];

          }
          return results;
        }
        this.recipes = shuffle(results)
        return this.recipes = results
      })
  }

}
