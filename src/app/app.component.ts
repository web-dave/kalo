import { Component, ViewEncapsulation } from "@angular/core";
import { color } from "../environments/environment";
import { NununuService } from "./nununu.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = "angular-essentials-training";
  constructor(private service: NununuService) {}

  color = color;
}
