import '@angular/common';
import { Component } from '@angular/core';
import { Content, Platform } from 'ionic-angular';
import { TabsPage } from './pages/tabs/tabs';
export var App = (function () {
    function App(platform) {
        this.platform = platform;
        this.rootPage = TabsPage;
        platform.ready().then(function () {
        });
    }
    App.decorators = [
        { type: Component, args: [{
                    selector: 'ion-app',
                    template: "\n    <ion-content>\n    What up\n    </ion-content>\n  ",
                    directives: [Content],
                    providers: [Platform],
                },] },
    ];
    App.ctorParameters = [
        { type: Platform, },
    ];
    return App;
}());
