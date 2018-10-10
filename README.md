

# Foodable

## Description
 Foodable is an app where the user can search recipes that matches the selected ingredients.


## MVP
- ingredients filter
- sign up && login
- connect to the api 
- seed file  with ingredients
- seed file  with recipes


## Backlog
- create recipe
- add recipe to favorites
- food categories
- Password change
- Rate recipes
- Profile

## User stories
- 404 - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.

- 500 - As a user I want to see a nice error page so that I know that is not my fault.

- sign up - As a user I want to be able to sign up in the web application, so that i can have my own account.

- log in - As a user I want to be able to access to my account so that i can search for the possible recipes.

- log out - As a user I want to be able to log out from the web app so that I know no one else is using my account.

- homepage - As a user I want to be able to go to the homepage so that i can search recipes and see all the recipes available.

- search - As a user I want to search recipes that matches the ingredientes i have.

- recipes list - As a user i want to see all the recipes available so that i can choose one.

# CLIENT

## ROUTES 

- / - Homepage (public)
- /signup - Signup form (anon)
- /login - Login form (anon)
- /logout - Logout (user)
- /recipes - Search input, random recipes (user)
- /recipes/search-results?query (user)
- /recipe/:id - Recipe detail (user)


# SERVER

## Routes
GET /auth/me
POST /auth/signup 
POST /auth/login 
POST /auth/logout 

GET /recipes
GET /recipes/search-results
GET /recipe/:id

## Services
Auth
- authService.me
- authService.signup 
- authService.login 
- authService.logout 


Recipes
  - getOne
  - getAll
  - getRandom
  - getSearch

## Pages
  - signup (anon)
  - login (anon)
  - homepage (public)
  - recipes-list (user)
  - recipe/:id (user)

## Components

## Guards
- Require-init: public
- Require-user: if not logged in cannot access the page
- Require-anon: if an anon user i can only access the page

## Models
```
User model 

Username: String // required
Password: String// required

Ingredients model 
name: String
picture: String

Recipes model
name: String
picture: string
cookingTime: number
ingredients: Array
Preparation: any

```

## Links


### Trello
[Link url](https://trello.com)


### Git
https://github.com/Yenderlyh/Foodable

### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
## User Stories
