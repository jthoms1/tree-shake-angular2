import { ReflectiveInjector, coreBootstrap } from '@angular/core';
import { BROWSER_APP_PROVIDERS, browserPlatform } from '@angular/platform-browser';
import { AppNgFactory } from './app/app.ngfactory';
const appInjector = ReflectiveInjector.resolveAndCreate([BROWSER_APP_PROVIDERS, []], browserPlatform().injector);
const ngComponentRef = coreBootstrap(AppNgFactory, appInjector);
