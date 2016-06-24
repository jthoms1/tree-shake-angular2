import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
export var AboutPage = (function () {
    function AboutPage(navController) {
        this.navController = navController;
    }
    /** @nocollapse */
    AboutPage.decorators = [
        { type: Component, args: [{
                    template: "\n  <ion-navbar *navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n\n  <ion-content padding class=\"about\">\n  </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    AboutPage.ctorParameters = [
        { type: NavController, },
    ];
    return AboutPage;
}());
export function removeMeDangIt() {
    return 'hi josh';
}
