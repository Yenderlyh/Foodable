import { Component, OnInit, Input } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: any;
  recipes: any;
  favorites: any;
  favorited =  false;
  id: string;
  error = false;



  constructor(private recipesService: RecipesService,
    private route: ActivatedRoute) { }

  

  ngOnInit() {
   
   
  }

}

 
