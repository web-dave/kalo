import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { BookService } from "../../shared/book.service";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default
})
export class BooksComponent implements OnInit {
  constructor(private service: BookService) {}

  ngOnInit() {}
}
