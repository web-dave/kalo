import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutModule } from "./about/about.module";
import { MyNavComponent } from "./my-nav/my-nav.component";
import { PreloadDelayed } from "./shared/preload";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, MyNavComponent],
  imports: [BrowserModule, AppRoutingModule, AboutModule, HttpClientModule],
  providers: [PreloadDelayed],
  bootstrap: [AppComponent]
})
export class AppModule {}
