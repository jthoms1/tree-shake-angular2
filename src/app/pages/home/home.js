var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
export let HomePage = class HomePage {
    constructor(navController) {
        this.navController = navController;
    }
};
HomePage = __decorate([
    Component({
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
    }), 
    __metadata('design:paramtypes', [NavController])
], HomePage);
