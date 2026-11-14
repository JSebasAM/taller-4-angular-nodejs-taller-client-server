import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarConfig, NavbarOrganism } from '@brejcha13320/design-system-bootstrap';
import { environment } from '../environments/environment';

/**
 * Componente raíz de la aplicación.
 *
 * @remarks
 * Este componente actúa como punto de entrada principal
 * de la aplicación Angular. Define la estructura base
 * y configura el navbar principal mediante el componente
 * `NavbarOrganism`.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterOutlet, NavbarOrganism],
})
export class App {
  /**
   * Indica si la aplicación se ejecuta en modo demo con datos simulados.
   */
  readonly isDemo: boolean = environment.useMock;

  /**
   * Configuración del navbar principal.
   */
  navbarConfig: NavbarConfig = {
    title: 'Angular Client',
    iconConfig: {
      icon: 'bootstrap',
      size: 2,
    },
    navLinks: [
      { text: 'Usuarios', url: '/users' },
      { text: 'Productos', url: '/products' },
      { text: 'Proveedores', url: '/providers' },
      { text: 'Orders', url: '/orders' },
      { text: 'Tickets', url: '/tickets' },
    ],
  };
}
