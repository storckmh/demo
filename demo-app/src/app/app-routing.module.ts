import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './main/home/home.component';
import {PhotoResolver} from './shared/resolvers/photo.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent,
    resolve: {
      photoData: PhotoResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
