import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pages"
})
export class PagesPipe implements PipeTransform {
  transform(value: any, arg: any = "s."): any {
    return `${arg}: ${value}`;
  }
}
