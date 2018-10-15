import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RecipesService } from 'src/app/services/recipes.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  results: any[] = [];
  queryField: FormControl = new FormControl();
  error = false;

  constructor(private recipesService: RecipesService) { }


  ngOnInit() {
    this.queryField.valueChanges
      .subscribe(result => {
        this.recipesService.getList(result)
        .then((result)=> {
          console.log(result)
        })
        .catch((error)=>{
          console.log(error)
        })
      });

  }
}
