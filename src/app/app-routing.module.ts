import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about/about.component";
import { PreloadDelayed } from "./shared/preload";

const routes: Routes = [
  {
    path: "foo",
    loadChildren: "./books/books.module#BooksModule",
    data: {
      preload: true
    }
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "",
    redirectTo: "/foo",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "/about"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadDelayed })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
// providers: [PreloadDelayed],
