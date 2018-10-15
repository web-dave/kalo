import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BookPreviewComponent } from "./book-preview.component";

let book = {
  title: "Hello World"
};
let selectedBook;

describe("BookPreviewComponent", () => {
  let component: BookPreviewComponent;
  let fixture: ComponentFixture<BookPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookPreviewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPreviewComponent);
    component = fixture.componentInstance;
    component.book = book;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("select a Book", async(() => {
    expect(component.book.title).toBe("Hello World");
    component.bookselected.subscribe(b => (selectedBook = b));
    component.selectThisBook();
    expect(component.book.title).toBe(selectedBook.title);
  }));
});
