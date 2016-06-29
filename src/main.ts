import {ComponentResolver, ReflectiveInjector, coreBootstrap} from '@angular/core';
import {BROWSER_APP_PROVIDERS, browserPlatform} from '@angular/platform-browser';
import {ionicPostBootstrap, ionicProviders} from 'ionic-angular';

import {AppNgFactory} from './compiled_app/app.ngfactory';

const providers = ionicProviders();
const appInjector = ReflectiveInjector.resolveAndCreate([BROWSER_APP_PROVIDERS, providers], browserPlatform().injector);

const ngComponentRef = coreBootstrap(AppNgFactory, appInjector);
ionicPostBootstrap(ngComponentRef);

