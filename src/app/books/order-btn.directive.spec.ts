import { OrderBtnDirective } from "./order-btn.directive";
import { Component, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

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

describe("A component with OrderBtnDirective", () => {
  let fixture: ComponentFixture<Foo>;
  let element: DebugElement;
  let inst: OrderBtnDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Foo, OrderBtnDirective]
    });
    fixture = TestBed.createComponent(Foo);
    element = fixture.debugElement.query(By.directive(OrderBtnDirective));
    inst = element.injector.get(OrderBtnDirective);
  });
  describe("orderBtn", () => {
    it("should be a button", () => {
      expect(inst.orderBtnElement.tagName).toBe("BUTTON");
    });
    it("should show `Kauf mich`", () => {
      fixture.detectChanges();
      expect(inst.orderBtnElement.innerText).toBe("Design Patterns");
    });
    it("should write a console.log if clicked", () => {
      fixture.detectChanges();
      spyOn(console, "log");
      inst.orderBtnElement.click();
      expect(console.log).toHaveBeenCalledWith(
        "this.orderBtn:",
        "978-0-20163-361-0"
      );
    });
  });
});
