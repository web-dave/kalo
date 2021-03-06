import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BookListComponent } from "./book-list.component";
import { BookService } from "../../shared/book.service";
import { BookDetailsComponent } from "../book-details/book-details.component";
import {
  Component,
  Output,
  EventEmitter,
  Input,
  Directive
} from "@angular/core";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { of } from "rxjs";
import { BookServiceMock } from "src/app/shared/serv.mock";

@Component({
  selector: "app-book-preview",
  template: ""
})
class Foo {
  @Input()
  book;
  @Input()
  change: string;
  @Output()
  bookselected = new EventEmitter();
}

@Directive({
  selector: "[orderBtn]"
})
class Bar {
  @Input()
  orderBtn;
}

describe("BookListComponent", () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookListComponent, BookDetailsComponent, Foo, Bar],
      // providers: [BookService],
      providers: [
        {
          provide: BookService,
          useClass: BookServiceMock
        }
      ],
      imports: [RouterTestingModule]
    }).compileComponents();
    // let serv = TestBed.get(BookService);
    // spyOn(serv, "getBooks").and.returnValue(of([]));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;

    compiled = fixture.nativeElement;

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should display 3 books", () => {
    let elements = compiled.querySelectorAll("app-book-preview");
    expect(elements.length).toBe(3);
  });
});
