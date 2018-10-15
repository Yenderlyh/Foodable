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

  // addToFavorites() {
  //   this.favorited = !this.favorited;
  //   console.log(this.favorited)

  //   if (this.favorited){
  //     this.favorites.push(this.id)
  //     .then((result)=>{
  //       this.favorites=result;
  //       console.log(result)
  //     })
  //     .catch((error) =>{
  //       console.log(error);
  //       this.error =true;
  //     })
  //   }  
  // }

  // addedToFavorites(){
  //   if (this.favorited === true){
  //     this.favorites.push(this.id)
  //     .then((result)=> {
  //       this.favorites = result;
  //       console.log(result)
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       this.error = true;
  //     })
  //   }
  // }

  ngOnInit() {
    // this.route.params
    // .subscribe((params) => {
    //   this.id = params.id;
    //   this.recipesService.getOne(this.id)
    //     .then((result) => {
    //       this.recipes = result;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       this.error = true;
    //     })
    // })
   
  }

}

 
