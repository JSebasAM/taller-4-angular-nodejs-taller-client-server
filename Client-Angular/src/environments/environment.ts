/**
 * Configuración de variables de entorno de la aplicación.
 *
 * @remarks
 * Este archivo contiene las constantes de entorno utilizadas
 * en la aplicación Angular. Se reemplaza automáticamente
 * según el entorno (development, production, github-pages, etc.)
 * durante el proceso de build.
 */
export const environment = {
  /**
   * URL base del backend de la aplicación.
   */
  baseUrl: 'http://localhost:3000',

  /**
   * Indica si la aplicación debe responder peticiones usando mocks locales.
   */
  useMock: false,
};
