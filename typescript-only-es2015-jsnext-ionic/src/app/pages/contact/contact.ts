import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  template: `
  <ion-navbar *navbar>
    <ion-title>
      Contact
    </ion-title>
  </ion-navbar>

  <ion-content>
    <ion-list>
      <ion-list-header>Follow us on Twitter</ion-list-header>
      <ion-item>
        <ion-icon name="ionic" item-left></ion-icon>
        @ionicframework
      </ion-item>
    </ion-list>
  </ion-content>
  `
})
export class ContactPage {
  constructor(private navController: NavController) {
  }
}
