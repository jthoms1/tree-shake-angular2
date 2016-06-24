import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
export var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = HomePage;
        this.tab2Root = AboutPage;
        this.tab3Root = ContactPage;
    }
    /** @nocollapse */
    TabsPage.decorators = [
        { type: Component, args: [{
                    template: "\n  <ion-tabs>\n    <ion-tab [root]=\"tab1Root\" tabTitle=\"Home\" tabIcon=\"home\"></ion-tab>\n    <ion-tab [root]=\"tab2Root\" tabTitle=\"About\" tabIcon=\"information-circle\"></ion-tab>\n    <ion-tab [root]=\"tab3Root\" tabTitle=\"Contact\" tabIcon=\"contacts\"></ion-tab>\n  </ion-tabs>\n  "
                },] },
    ];
    /** @nocollapse */
    TabsPage.ctorParameters = [];
    return TabsPage;
}());
