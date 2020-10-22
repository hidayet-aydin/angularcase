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
  providers: [PostsideComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    let now = moment();
    console.log('hello world', now.format('DD/MM/YYYY hh:mm:ss'));
  }
 }
