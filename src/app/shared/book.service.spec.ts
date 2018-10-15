import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { async, inject, TestBed } from "@angular/core/testing";

import { BookService } from "./book.service";
const booksStub = [
  {
    title: "Design Patterns",
    subtitle: "Elements of Reusable Object-Oriented Software",
    isbn: "978-0-20163-361-0",
    abstract:
      "Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. Previously undocumented, these 23 patterns allow designers to create more flexible, elegant, and ultimately reusable designs without having to rediscover the design solutions themselves.",
    numPages: 395,
    author: "Erich Gamma / Richard Helm / Ralph E. Johnson / John Vlissides",
    publisher: {
      name: "Addison-Wesley",
      url: "http://www.addison-wesley.de/"
    }
  },
  {
    title: "REST und HTTP",
    subtitle: "Entwicklung und Integration nach dem Architekturstil des Web",
    isbn: "978-3-86490-120-1",
    abstract:
      "Das Buch bietet eine theoretisch fundierte, vor allem aber praxistaugliche Anleitung zum professionellen Einsatz von RESTful HTTP. Es beschreibt den Architekturstil REST (Representational State Transfer) und seine Umsetzung im Rahmen der Protokolle des World Wide Web (HTTP, URIs und andere).",
    numPages: 330,
    author: "Stefan Tilkov / Martin Eigenbrodt / Silvia Schreier / Oliver Wolf",
    publisher: {
      name: "dpunkt.verlag",
      url: "http://dpunkt.de/"
    }
  },
  {
    title: "Eloquent JavaScript",
    subtitle: "A Modern Introduction to Programming",
    isbn: "978-1-59327-584-6",
    abstract:
      "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
    numPages: 472,
    author: "Marijn Haverbeke",
    publisher: {
      name: "No Starch Press",
      url: "https://www.nostarch.com/"
    }
  }
];

describe("BooksService", () => {
  beforeEach(() => {
    // setup @ngModule for testing
    TestBed.configureTestingModule({
      providers: [BookService],
      imports: [HttpClientTestingModule]
    });
  });

  // check after each test there is no pending (open) request
  afterEach(inject(
    [HttpTestingController],
    (backend: HttpTestingController) => {
      backend.verify();
    }
  ));

  it("should be created", inject([BookService], (service: BookService) => {
    expect(service).toBeTruthy();
  }));

  it("should return all books", inject(
    [BookService, HttpTestingController],
    (service: BookService, backend: HttpTestingController) => {
      // call service method and test IN the subscription. no need to use async anymore!!
      service.getBooks().subscribe(books => {
        expect(books).toEqual(booksStub);
      });
      // Wait for the call and response with mockdata  `.flush()`
      backend
        .expectOne("http://localhost:4730/books/")
        .flush(booksStub, { status: 200, statusText: "Ok" });
    }
  ));

  it("should return one specific book", inject(
    [BookService, HttpTestingController],
    (service: BookService, backend: HttpTestingController) => {
      service.getBook("1234").subscribe(book => {
        expect(book).toEqual(booksStub[0]);
      });
      backend
        .expectOne("http://localhost:4730/books/1234/")
        .flush(booksStub[0], { status: 200, statusText: "Ok" });
    }
  ));

  // it("should update a book", inject(
  //   [BookService, HttpTestingController],
  //   (service: BookService, backend: HttpTestingController) => {
  //     service.updateBook(booksStub[0]).subscribe(book => {
  //       expect(book.title).toEqual(booksStub[0].title);
  //     });
  //     backend
  //       .expectOne(`http://localhost:4730/books/${booksStub[0].isbn}/`)
  //       .flush(booksStub[0], { status: 200, statusText: "Ok" });
  //   }
  // ));

  // it("should create a new book", inject(
  //   [BookService, HttpTestingController],
  //   (service: BookService, backend: HttpTestingController) => {
  //     service.createBook(booksStub[0]).subscribe(book => {
  //       expect(book.title).toEqual(booksStub[0].title);
  //     });
  //     backend
  //       .expectOne("http://localhost:4730/books/")
  //       .flush(booksStub[0], { status: 200, statusText: "Ok" });
  //   }
  // ));
});

// export class BooksServiceStub implements BookService {
//   restRoot;

//   getBooks(): Observable<IBook[]> {
//     return Observable.of(booksStub);
//   }

//   getBook(isbn): Observable<IBook> {
//     return Observable.of(booksStub[0]);
//   }

//   updateBook(book): Observable<IBook> {
//     return Observable.of(book);
//   }

//   createBook(book): Observable<IBook> {
//     return Observable.of(book);
//   }
// }
