import { Logger } from '@deno-library/logger'

interface ILoggerAdapter {
    writeLog(message: string): void;
    writeError(errorMessage: string): void;
    writeWarning(warningMessage: string): void;
}


export class LoggerAdapter implements ILoggerAdapter {
    private logger: Logger;
    constructor() {
        this.logger = new Logger();
    }

    writeLog(message: string): void {
        this.logger.log(message);
    }

    writeError(errorMessage: string): void {
        this.logger.error(errorMessage);
    }

    writeWarning(warningMessage: string): void {
        this.logger.warn(warningMessage);
    }
}