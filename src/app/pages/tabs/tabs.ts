import {Component} from '@angular/core'
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {Tabs} from 'ionic-angular';

@Component({
  selector: 'io-tabs',
  template: `
  <ion-tabs>
    <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>
    <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>
    <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>
  </ion-tabs>
  `
})
export class TabsPage {

  tab1Root: any;
  tab2Root: any;
  tab3Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = AboutPage;
    this.tab3Root = ContactPage;
  }
}
