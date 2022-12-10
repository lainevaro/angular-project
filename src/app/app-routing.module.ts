import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImagesListComponent } from './images-list/images-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gifs', component: ImagesListComponent, data: {key: 'gif'} },
  { path: 'stickers', component: ImagesListComponent , data: {key: 'sticker'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
