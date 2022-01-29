import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from 'src/app/book/models/book.model';
import { BookService } from 'src/app/book/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: BookModel[];
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = [];

    // const instanceOfBookService = new BookService();
    const bookObservable = this.bookService.getBooks();
    bookObservable.subscribe(
        (result)=>{this.books=result;},
        (err)=>{console.log(err)},
        ()=>{console.log("done")}
    )
  }

}
