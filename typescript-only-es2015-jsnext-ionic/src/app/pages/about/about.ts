import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  template: `
  <ion-navbar *navbar>
    <ion-title>
      About
    </ion-title>
  </ion-navbar>

  <ion-content padding class="about">
  </ion-content>
  `
})
export class AboutPage {
  constructor(private navController: NavController) {
  }
}

export function removeMeDangIt () {
  return 'hi josh';
}
