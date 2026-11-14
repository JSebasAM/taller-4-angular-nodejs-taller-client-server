import { TestBed } from '@angular/core/testing';
import { HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { clientAngularInterceptor } from './client-angular.interceptor';
import { environment } from '../../environments/environment';
import { of } from 'rxjs';
import { USERS_MOCK } from '../mocks/users.mocks';

describe('clientAngularInterceptor', () => {
  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => clientAngularInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({});
    environment.useMock = false;
  });

  afterEach(() => {
    environment.useMock = false;
  });

  it('deberia crear el interceptor', () => {
    expect(interceptor).toBeTruthy();
  });

  it('debería concatenar el baseUrl a la URL de la petición cuando useMock es falso', () => {
    const requestMock = new HttpRequest('GET', 'test');

    const next: HttpHandlerFn = (req) => {
      expect(req.url).toBe(`${environment.baseUrl}/test`);
      return of(new HttpResponse({ status: 200 }));
    };

    interceptor(requestMock, next).subscribe();
  });

  it('debería responder con USERS_MOCK cuando useMock es verdadero para api/users', (done) => {
    environment.useMock = true;
    const requestMock = new HttpRequest('GET', 'api/users/10');
    const next: HttpHandlerFn = () => {
      throw new Error('next no debería ser llamado en modo mock');
    };

    interceptor(requestMock, next).subscribe({
      next: (event) => {
        if (event instanceof HttpResponse) {
          expect(event.status).toBe(200);
          expect(event.body).toEqual(USERS_MOCK);
          done();
        }
      },
    });
  });
});
