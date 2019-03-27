import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  GetBooks(){
    return [
      {
        author: 'Suzanne Collins',
        date: new Date('4/5/1813'),
        title: 'the Hunger Games',
        id: '1'
      },
      {
        author: 'jane Austen',
        date: new Date('4/5/1981'),
        title: 'pride and Prejudice',
        id: '2'
      },
      {
        author: 'George Orwell',
        date: new Date('4/5/1991'),
        title: 'animal Farm',
        id: '3'
      }
      ];
  }

  GetBookById(){}

  AddBook(){}

  EditBook(){}
}
