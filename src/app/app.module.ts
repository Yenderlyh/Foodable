import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeIdComponent } from './pages/recipe-id/recipe-id.component';
import { InitAuthGuard } from './guards/init-auth.guard';
import { RequireAnonGuard } from './guards/require-anon.guard';
import { RequireUserGuard } from './guards/require-user.guard';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { SliderIntroComponent } from './components/slider-intro/slider-intro.component';


const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [ InitAuthGuard ] },
  { path: 'login', component: LoginPageComponent, canActivate: [ RequireAnonGuard ]},
  { path: 'signup', component: SignUpPageComponent, canActivate: [ RequireAnonGuard ]},
  { path: 'recipe/:id', component: RecipeIdComponent, canActivate: [RequireUserGuard]},
  { path: 'profile', component: ProfilePageComponent, canActivate: [RequireUserGuard]},
  { path: '**',  component: NotFoundPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    HomePageComponent,
    LoginPageComponent,
    SignUpPageComponent,
    RecipeDetailComponent,
    RecipeIdComponent,
    ProfilePageComponent,
    MenuComponent,
    SliderIntroComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
