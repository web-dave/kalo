import { Component, OnInit, ViewEncapsulation, OnDestroy } from "@angular/core";
import { BookService } from "../../shared/book.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

interface IBook {
  title: string;
  subtitle: string;
  isbn: string;
  abstract: string;
  numPages: number;
  author: string;
  publisher: {
    name: string;
    url: string;
  };
}

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.scss"]
})
export class BookListComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    clearInterval(this.trigger);
    this.subscription.unsubscribe();
  }
  books: IBook[];
  subscription: Subscription;

  foo = "Hurz";
  trigger;
  change = "";
  constructor(
    private service: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // this.foo = 1;
  }

  selectBook(book) {
    this.router.navigate([book.isbn], { relativeTo: this.route });
  }

  trackBy(i, itm) {
    console.log(i, itm);
    return i;
  }

  ngOnInit() {
    // this.trigger = setInterval(() => {
    this.getBooks();
    // }, 3000);
  }
  getBooks() {
    this.subscription = this.service
      .getBooks()
      .subscribe(
        b => (this.books = b),
        err => console.error(err),
        () => console.log("Done")
      );
  }

  changeBook() {
    // let bs = [...this.books];
    let b = {
      ...this.books[1]
    };
    b.title = new Date().toDateString();
    // bs.push(b);
    this.books[1] = b;
    // this.books[1].title = new Date().toString();
    // this.change = new Date().toString();
  }
}
