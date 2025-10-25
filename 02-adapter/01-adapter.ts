/**
 * ! Patrón Adapter
 *  Permite que objetos con interfaces incompatibles trabajen juntos, también es muy
 *  util para utilizar librerías de terceros en nuestra aplicación sin depender
 *  directamente de ellas.
 *
 * * Es útil cuando se quiere reutilizar una clase que no tiene la interfaz que
 * * necesitamos o cuando queremos crear una capa de abstracción para una librería
 * * de terceros.
 *
 * https://refactoring.guru/es/design-patterns/adapter
 */


import { LocalLogger } from "./adapter-files/local-logger.ts";
// import { LoggerAdapter as LocalLogger } from "./adapter-files/logger-adapter.ts";


const logger = new LocalLogger("01-adapter.log");

logger.writeLog("Este es un mensaje de log.");
logger.writeWarning("Este es un mensaje de advertencia.");
logger.writeError("Este es un mensaje de error.");

