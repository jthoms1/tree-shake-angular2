import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
export var HomePage = (function () {
    function HomePage(navController) {
        this.navController = navController;
    }
    /** @nocollapse */
    HomePage.decorators = [
        { type: Component, args: [{
                    template: "\n  <ion-navbar *navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n\n  <ion-content padding class=\"home\">\n    <h2>Welcome to Ionic!</h2>\n    <p>\n      This starter project comes with simple tabs-based layout for apps\n      that are going to primarily use a Tabbed UI.\n    </p>\n    <p>\n      Take a look at the <code>app/</code> directory to add or change tabs,\n      update any existing page or create new pages.\n    </p>\n  </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = [
        { type: NavController, },
    ];
    return HomePage;
}());
