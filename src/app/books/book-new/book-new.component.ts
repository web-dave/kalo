import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BookService } from "../../shared/book.service";

@Component({
  selector: "app-book-new",
  templateUrl: "./book-new.component.html",
  styleUrls: ["./book-new.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookNewComponent implements OnInit {
  form: FormGroup;
  saved = false;
  constructor(private formBuilder: FormBuilder, private service: BookService) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: [
        "",
        Validators.compose([Validators.required, Validators.minLength(6)])
      ],
      isbn: [
        "",
        Validators.compose([Validators.required, Validators.minLength(6)])
      ],
      publisher: this.formBuilder.group({
        name: ["", Validators.required],
        url: ["", Validators.required]
      })
    });
  }

  saveBook() {
    let book = {
      ...this.service.getNewBook(),
      ...this.form.value
    };
    console.log(book);
    this.saved = true;
  }

  isSaved() {
    return this.saved || !this.form.dirty;
  }
}
