import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  vm = {
    fields: ["field0"]
  };
  constructor() {
    let i = 1;
    while (i < 50) {
      this.vm.fields.push("field-" + i.toString());
      i++;
    }
  }

}
