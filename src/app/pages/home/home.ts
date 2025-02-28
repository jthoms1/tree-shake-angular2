import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  template: `
  <ion-navbar *navbar>
    <ion-title>Home</ion-title>
  </ion-navbar>

  <ion-content padding class="home">
    <h2>Welcome to Ionic!</h2>
    <p>
      This starter project comes with simple tabs-based layout for apps
      that are going to primarily use a Tabbed UI.
    </p>
    <p>
      Take a look at the <code>app/</code> directory to add or change tabs,
      update any existing page or create new pages.
    </p>
  </ion-content>
  `
})
export class HomePage {
  constructor(private navController: NavController) {

  }
}
