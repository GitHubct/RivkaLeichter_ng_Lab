import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { BooksLibraryComponent } from './books-library/books-library.component';
import { AddBookComponent } from './add-book/add-book.component';

const router: Routes =[
  {path:'Home',component:HomeComponent},
  {path:'BookLibrary',component:BooksLibraryComponent},
  {path:'AddBook',component:AddBookComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(router)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
