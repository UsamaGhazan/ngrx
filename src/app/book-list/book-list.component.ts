import { Component } from '@angular/core';
import { AddBook, RemoveBook } from '../books/book.action';
import { Observable } from 'rxjs';
import { Book } from '../models/book';
import { Store ,select} from '@ngrx/store';
import { AppState } from '../app.state';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books$!:Observable<Book[]>

  constructor(private store:Store<AppState>){
    this.books$=store.pipe(select('book')) 

  }

  addBook(id:string,title:string,author:string){
    console.log(id,title,author)
    this.store.dispatch(AddBook({id,title,author}))
  }
  removeBook(id:string){
    const bookId=id
    this.store.dispatch(RemoveBook({bookId}))
  }
}
