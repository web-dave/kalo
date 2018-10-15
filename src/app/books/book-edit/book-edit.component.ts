import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { IBook } from "../../shared/custom-types";
import { BookService } from "../../shared/book.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-book-edit",
  templateUrl: "./book-edit.component.html",
  styleUrls: ["./book-edit.component.scss"]
})
export class BookEditComponent implements OnInit {
  book: IBook;
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
    });
  }

  saveBook(v) {
    console.log("--->", v);
    this.booksService.updateBook(this.book).subscribe(() => {
      this.router.navigate([".."], { relativeTo: this.route });
    });
  }
}
