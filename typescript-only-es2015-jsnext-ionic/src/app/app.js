import { Component } from '@angular/core';
import { StatusBar } from 'ionic-native';
import { Nav, Platform, ionicBootstrap } from 'ionic-angular';
import { TabsPage } from './pages/tabs/tabs';
export var App = (function () {
    function App(platform) {
        this.platform = platform;
        this.rootPage = TabsPage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }
    /** @nocollapse */
    App.decorators = [
        { type: Component, args: [{
                    selector: 'ion-app',
                    template: '<ion-nav [root]="rootPage"></ion-nav>',
                    directives: [Nav, TabsPage]
                },] },
    ];
    /** @nocollapse */
    App.ctorParameters = [
        { type: Platform, },
    ];
    return App;
}());
ionicBootstrap(App);
