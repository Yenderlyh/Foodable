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
  preparation:string;
  recipes: any;

  constructor(    
    private recipesService: RecipesService,
    ) { }

  ngOnInit() {
    this.recipesService.getAll()
    .then((results) => {
      console.log(results)
      this.recipes = results
    })
  }

}
