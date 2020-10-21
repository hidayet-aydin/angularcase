import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostpageComponent } from './postpage/postpage.component';
import { MainpageComponent } from './mainpage/mainpage.component';

const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'posts', component: PostpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
