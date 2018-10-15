import { Component, OnInit } from "@angular/core";
import { AboutService } from "../about.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  constructor(private service: AboutService) {}

  ngOnInit() {}
}
