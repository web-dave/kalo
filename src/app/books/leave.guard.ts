import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanDeactivate
} from "@angular/router";
import { Observable } from "rxjs";
import { BookNewComponent } from "./book-new/book-new.component";

@Injectable()
export class LeaveGuard implements CanDeactivate<BookNewComponent> {
  canDeactivate(target: BookNewComponent) {
    if (!target.isSaved()) {
      return window.confirm("Do you really want to cancel?");
    } else {
      return true;
    }
  }
}
