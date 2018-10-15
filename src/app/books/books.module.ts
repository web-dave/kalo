import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BooksRoutingModule } from "./books-routing.module";
import { BooksComponent } from "./books/books.component";
import { BookListComponent } from "./book-list/book-list.component";
import { BookPreviewComponent } from "./book-preview/book-preview.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { OrderBtnDirective } from "./order-btn.directive";
import { BookEditComponent } from "./book-edit/book-edit.component";
import { BookNewComponent } from "./book-new/book-new.component";
import { LeaveGuard } from "./leave.guard";
import { PagesPipe } from './pages.pipe';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    BooksComponent,
    BookListComponent,
    BookPreviewComponent,
    BookDetailsComponent,
    OrderBtnDirective,
    BookEditComponent,
    BookNewComponent,
    PagesPipe
  ],
  exports: [BooksComponent],
  providers: [LeaveGuard]
})
export class BooksModule {}
