import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookListComponent } from "./book-list/book-list.component";
import { BooksComponent } from "./books/books.component";
import { BookDetailsComponent } from "./book-details/book-details.component";
import { BookEditComponent } from "./book-edit/book-edit.component";
import { BookNewComponent } from "./book-new/book-new.component";
import { LeaveGuard } from "./leave.guard";

const routes: Routes = [
  {
    path: "",
    component: BooksComponent,
    children: [
      {
        path: "",
        component: BookListComponent
      },
      {
        path: "new",
        component: BookNewComponent,
        canDeactivate: [LeaveGuard]
      },
      {
        path: ":isbn",
        component: BookDetailsComponent
      },
      {
        path: ":isbn/edit",
        component: BookEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
