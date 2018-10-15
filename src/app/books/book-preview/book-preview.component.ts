import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "app-book-preview",
  templateUrl: "./book-preview.component.html",
  styleUrls: ["./book-preview.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookPreviewComponent implements OnInit, OnChanges {
  @Input()
  book;
  @Input()
  change: string;
  @Output()
  bookselected = new EventEmitter();
  private iv;
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChanges", changes);
    this.detect();
  }

  ngOnInit() {
    // this.iv = setInterval(() => this.detect(), 3000);
  }
  selectThisBook() {
    this.bookselected.emit(this.book);
  }
  detect() {
    console.log("detect");
    this.cdr.detectChanges();
  }
}
