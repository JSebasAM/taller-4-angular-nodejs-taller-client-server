/**
 * Configuración de entorno para despliegue en GitHub Pages.
 *
 * @remarks
 * Habilita el modo demo mediante mocks locales para simular las respuestas
 * del backend de Node.js sin necesidad de tener un servidor Express activo.
 */
export const environment = {
  /**
   * En modo demo no se requiere URL remota; el interceptor responderá directamente.
   */
  baseUrl: '',

  /**
   * Bandera activa para interceptar endpoints de la API y responder con datos simulados.
   */
  useMock: true,
};
