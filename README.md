# Angularcase Auto Info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# Angular Case Question

## Todos

1. Prepare two pages (as visualized in the attachment)

    a. A page which consists a paginated table of Users with a “Name” search filter in the route : Base url (main route / )

    b. A page which shows posts of a specific user in the route : /posts?userId=(user_ d)

2. Place a digital clock (with a format of 29/09/2020 17:13:15) on a small header on top of the page, and make it work continuously

3. Put the “latest viewed users” component on the right hand side, as a steady component which will always be visible.

## Development Rules

1. Use Angular10 (latest vers on).

2. Use ngx-bootstrap for creating table with pagination, and Bootstrap cards (if needed). https://valor-software.com/ngx-bootstrap
3. Speaking of tabular data, server-side requests must involve a combined version of the name filter and the current page number, requring the usage of RxJS library when fetching data. As the api dictates, set rows per page count to 20, as hardcoded.
4. Current page number and the name filter input will be presented as data streams, use behavior subjects for triggering changes on the fetch api.
5. Latest viewed users component must make use of ngRx (React ve State for Angular) library when saving the latest viewed users, and will always be available on the right sidebar. Inner part of this component must accumulate as the user visits different (distinct) user posts. It s very important that the store will always have 5 users, rather than piling up all the visited users.
6. Create date on the posts page, needs to be formatted as (dd/mm/yyyy hh:mm) using MomentJS.
7. Username will be presented as a title on the user posts page.

## API Informat on and Example Requests

fetching user list

https://gorest.co.in/public-api/users

userlist with pagination and filtering

https://gorest.co.in/public-api/users?name=varma&page=2

fetch ng user posts

https://gorest.co.in/public-api/users/:userId/posts

# Angular Case Working

## Usefull links
https://reqbin.com/
https://gorest.co.in/
https://ngrx.io/guide/store
https://valor-software.com/ngx-bootstrap/#/pagination

## CLI Commands

```bash
$ ng new angularcase
$ cd angularcase/
$ npm install ngx-bootstrap --save
$ npm install @ngrx/store --save
$ npm install @ngrx/entity --save
$ npm install bootstrap
$ npm install moment --save

$ ng g c navbar
$ ng g c rightside
$ ng g c tableside
$ ng g c postside
$ ng g c postpage
$ ng g c mainpage
```

## Module List

src > app > app.module.ts

```js 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import * as moment from 'moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RightsideComponent } from './rightside/rightside.component';
import { TablesideComponent } from './tableside/tableside.component';
import { PostsideComponent } from './postside/postside.component';
import { PostpageComponent } from './postpage/postpage.component';
import { MainpageComponent } from './mainpage/mainpage.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RightsideComponent,
    TablesideComponent,
    PostsideComponent,
    PostpageComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginationModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    let now = moment();
    console.log('hello world', now.format('DD/MM/YYYY hh:mm:ss'));
  }
 }

```


## Services

```bash
$ cd src/app/services/
$ mkdir users
$ cd users/
$ ng g i UserResponse
$ cd ..
$ mkdir posts
$ cd posts/
$ ng g i PostResponse
 ```

 src > app > services > getusers.service.ts

```js
import { Injectable } from '@angular/core';

//added
import { HttpClient } from '@angular/common/http';
import { UserResponse } from './users/user-response';
import { PostResponse } from './posts/post-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetusersService {

  constructor(private http: HttpClient) { }

  getUserInfo(userId: string): Observable<UserResponse>{
    return this.http.get<UserResponse>(`https://gorest.co.in/public-api/users?id=${userId}`);
  }

  getUsers(name: string, page: string): Observable<UserResponse>{
    return this.http.get<UserResponse>(`https://gorest.co.in/public-api/users?name=${name}&page=${page}`);
  }

  getPosts(userId: string): Observable<PostResponse>{
    return this.http.get<PostResponse>(`https://gorest.co.in/public-api/users/${userId}/posts`);
  }

}
````
