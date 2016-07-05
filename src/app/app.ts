import {Component} from '@angular/core';
//import {StatusBar} from 'ionic-native';
//import {Nav, Content, Platform} from 'ionic-angular';
//import {TabsPage} from './pages/tabs/tabs';
//import {HomePage} from './pages/home/home';

@Component({
  selector: 'ion-app',

  template: 'Hi'
  //template: '<ion-nav [root]="rootPage"></ion-nav>',
  //directives: [Nav]
  /*
  template: `
    <ion-content>
    What up
    </ion-content>
  `,
  providers: [Platform],
  directives: [Content]
 */
})
export class App {
}
/*

  rootPage:any;

  constructor(private platform:Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
//      StatusBar.styleDefault();
    });
  }
}
*/
