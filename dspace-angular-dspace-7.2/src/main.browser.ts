import 'zone.js/dist/zone';
import 'reflect-metadata';
import 'core-js/es/reflect';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { load as loadWebFont } from 'webfontloader';

import { hasValue } from './app/shared/empty.util';

import { BrowserAppModule } from './modules/app/browser-app.module';

import { environment } from './environments/environment';
import { AppConfig } from './config/app-config.interface';
import { extendEnvironmentWithAppConfig } from './config/config.util';

const bootstrap = () => platformBrowserDynamic()
  .bootstrapModule(BrowserAppModule, {
    preserveWhitespaces: true
  });

const main = () => {
  // Load fonts async
  // https://github.com/typekit/webfontloader#configuration
  loadWebFont({
    google: {
      families: ['Droid Sans']
    }
  });

  if (environment.production) {
    enableProdMode();

    return bootstrap();
  } else {

    return fetch('assets/config.json')
      .then((response) => response.json())
      .then((appConfig: AppConfig) => {

        // extend environment with app config for browser when not prerendered
        extendEnvironmentWithAppConfig(environment, appConfig);

        return bootstrap();
      });
  }
};

// support async tag or hmr
if (hasValue(environment.universal) && environment.universal.preboot === false) {
  main();
} else {
  document.addEventListener('DOMContentLoaded', main);
}
