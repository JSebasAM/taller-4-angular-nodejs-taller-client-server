import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';
import { USERS_MOCK } from '../mocks/users.mocks';
import { PRODUCTS_MOCK } from '../mocks/products.mocks';
import { providersMock } from '../mocks/providers.mocks';
import { ORDERS_MOCK } from '../mocks/orders.mocks';
import { TICKETS_MOCK } from '../mocks/tickets.mocks';

/**
 * Interceptor HTTP que gestiona las peticiones de la aplicación.
 *
 * En modo normal (`environment.useMock = false`), antepone el `baseUrl`
 * para comunicarse con el servidor real de Node.js.
 *
 * En modo demo (`environment.useMock = true`, usado en GitHub Pages),
 * intercepta los endpoints /api/users, /api/products, /api/providers,
 * /api/orders y /api/tickets retornando datos simulados locales acordes
 * al Swagger y modelos del servidor.
 */
export const clientAngularInterceptor: HttpInterceptorFn = (req, next) => {
  if (environment.useMock) {
    const url = req.url;

    if (url.includes('api/users')) {
      return of(new HttpResponse({ status: 200, body: USERS_MOCK }));
    }
    if (url.includes('api/products')) {
      return of(new HttpResponse({ status: 200, body: PRODUCTS_MOCK }));
    }
    if (url.includes('api/providers')) {
      return of(new HttpResponse({ status: 200, body: providersMock }));
    }
    if (url.includes('api/orders')) {
      return of(new HttpResponse({ status: 200, body: ORDERS_MOCK }));
    }
    if (url.includes('api/tickets')) {
      return of(new HttpResponse({ status: 200, body: TICKETS_MOCK }));
    }
  }

  return next(req.clone({ url: `${environment.baseUrl}/${req.url}` }));
};
