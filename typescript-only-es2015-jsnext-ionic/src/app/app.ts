import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h1>Hi</h1>
    <div>Hellow World</div>
  `
})
export class App {
  constructor() {
    console.log('what?');
  }
}

export function hello() {
  console.log('huh');
}
