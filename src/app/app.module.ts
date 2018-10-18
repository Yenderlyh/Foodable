import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeIdComponent } from './pages/recipe-id/recipe-id.component';
import { SliderIntroPageComponent } from './pages/slider-intro-page/slider-intro-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { SliderHomePageComponent } from './components/slider-home-page/slider-home-page.component';

import { InitAuthGuard } from './guards/init-auth.guard';
import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';
import { from } from 'rxjs';
import { SearchComponent } from './components/search/search.component';
import { IngredientsComponent } from './components/ingredients/ingredients.component';
import { StepsComponent } from './components/steps/steps.component';



const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [RequireUserGuard] },
  { path: 'login', component: LoginPageComponent, canActivate: [ RequireAnonGuard ]},
  { path: 'signup', component: SignUpPageComponent, canActivate: [ RequireAnonGuard ]},
  { path: 'recipe/:id', component: RecipeIdComponent, canActivate: [RequireUserGuard]},
  { path: 'slider', component: SliderIntroPageComponent, canActivate: [InitAuthGuard]},
  { path: '**',  component: NotFoundPageComponent }
];

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    HomePageComponent,
    LoginPageComponent,
    SignUpPageComponent,
    RecipeDetailComponent,
    RecipeIdComponent,
    MenuComponent,
    SliderIntroPageComponent,
    SliderHomePageComponent,
    SearchComponent,
    IngredientsComponent,
    StepsComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
