'use strict';

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/
const Route = use('Route');
Route.post('/api/users', 'UserController.store');
// Route.post('/api/deals', 'DealController.store');
Route.post('/api/token-auth', 'SessionController.store');

Route.resource('/api/users', 'UserController')
  .except(['create', 'edit', 'store'])
  .middleware('auth');

Route.resource('/api/deals', 'DealController');
  // .except(['create', 'edit', 'store'])
  // .middleware('auth');

// REST
// Resource: users
// UserController.index == HTTP GET /users
// UserController.show == HTTP GET /users/{id}
// UserController.create == HTTP GET /users/create
// UserController.store == HTTP POST /users
// UserController.edit == HTTP GET /users/{id}/edit
// UserController.update == HTTP PUT/PATCH /users/{id}
// UserController.destroy == HTTP DELETE /users/{id}


// Route.resource('/api/users', 'UserController')
  // .only(['index', 'show', 'update', 'destroy'])
  // .middleware('auth');

// Route.resource('/api/pledges', 'PledgeController')
  // .only(['index', 'show']);

// Route.resource('/api/organizations', 'OrganizationController')
  // .except(['create', 'edit']);

// Route.resource('/api/categories', 'CategoryController')
  // .except(['create', 'edit']);

// Route.resource('/api/pledges', 'PledgeController')
  // .only(['store', 'update', 'destroy'])
  // .middleware('auth');

// Route.post('/api/token-auth', 'SessionController.store');
