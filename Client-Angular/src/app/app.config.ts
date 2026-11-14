import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app.routes';
import { clientAngularInterceptor } from './interceptors/client-angular.interceptor';

/**
 * Configuración principal de la aplicación Angular.
 *
 * @remarks
 * Incluye enrutamiento con HashLocationStrategy para compatibilidad con GitHub Pages.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    provideHttpClient(withInterceptors([clientAngularInterceptor])),
  ],
};
