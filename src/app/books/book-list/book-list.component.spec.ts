import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BookListComponent } from "./book-list.component";
import { BookService } from "../../shared/book.service";
import { BookDetailsComponent } from "../book-details/book-details.component";

describe("BookListComponent", () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookListComponent, BookDetailsComponent],
      providers: [BookService]
    }).compileComponents();
    let serv = TestBed.get(BookService);
    spyOn(serv, "getBooks").and.returnValue([]);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
