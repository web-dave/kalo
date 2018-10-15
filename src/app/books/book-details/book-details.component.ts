import { Component, OnInit } from "@angular/core";
import { BookService } from "../../shared/book.service";
import { Router, ActivatedRoute } from "@angular/router";
import { IBook } from "../../shared/custom-types";
import { Observable } from "rxjs";

@Component({
  selector: "app-book-details",
  templateUrl: "./book-details.component.html",
  styleUrls: ["./book-details.component.scss"]
})
export class BookDetailsComponent implements OnInit {
  book: IBook;
  book$: Observable<IBook>;
  constructor(
    private booksService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: { isbn: string }) => {
      this.booksService.getBook(params.isbn).subscribe(b => {
        console.log("!!", b);
        this.book = b;
      });
      this.book$ = this.booksService.getBook(params.isbn);
    });
  }
}
