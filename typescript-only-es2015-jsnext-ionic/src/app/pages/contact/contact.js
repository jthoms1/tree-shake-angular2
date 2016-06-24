import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
export var ContactPage = (function () {
    function ContactPage(navController) {
        this.navController = navController;
    }
    /** @nocollapse */
    ContactPage.decorators = [
        { type: Component, args: [{
                    template: "\n  <ion-navbar *navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n\n  <ion-content>\n    <ion-list>\n      <ion-list-header>Follow us on Twitter</ion-list-header>\n      <ion-item>\n        <ion-icon name=\"ionic\" item-left></ion-icon>\n        @ionicframework\n      </ion-item>\n    </ion-list>\n  </ion-content>\n  "
                },] },
    ];
    /** @nocollapse */
    ContactPage.ctorParameters = [
        { type: NavController, },
    ];
    return ContactPage;
}());
