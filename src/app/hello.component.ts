import { Component, Input } from "@angular/core";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

@Component({
  selector: "hello",
  template: `
    <h1>Hello {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;

  constructor() {
    const d = dayjs.utc("15 Jun 2017 07:00", "D MMM YYYY HH:mm");
    const d2 = dayjs("15 Jun 2017 07:00", "D MMM YYYY HH:mm");
    console.log("UTC:");
    console.log(d.isUTC());
    console.log(d);
    console.log(d.toISOString());
    console.log("Local:");
    console.log(d2.isUTC());
    console.log(d2);
    console.log(d2.toISOString());
  }
}
