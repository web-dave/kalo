import { OrderBtnDirective } from "./order-btn.directive";

@Component({
  selector: "",
  template: "<div [orderBtn]='book'></div>"
})
class Foo {
  book = {
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
  };
}

// describe('OrderBtnDirective', () => {
//   it('should create an instance', () => {
//     const directive = new OrderBtnDirective();
//     expect(directive).toBeTruthy();
//   });
// });
