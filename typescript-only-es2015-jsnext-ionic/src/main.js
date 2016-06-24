import { ReflectiveInjector, coreBootstrap } from '@angular/core';
import { BROWSER_APP_PROVIDERS, browserPlatform } from '@angular/platform-browser';
import { ionicPostBootstrap, ionicProviders } from 'ionic-angular';
import { AppNgFactory } from './app/app.ngfactory';
var providers = ionicProviders();
var appInjector = ReflectiveInjector.resolveAndCreate([BROWSER_APP_PROVIDERS, providers], browserPlatform().injector);
var ngComponentRef = coreBootstrap(AppNgFactory, appInjector);
ionicPostBootstrap(ngComponentRef);
