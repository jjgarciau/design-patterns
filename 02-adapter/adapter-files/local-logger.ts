import { COLORS } from "../../helpers/colors.ts";

export interface ILocalLogger {
    writeLog(message: string): void;
    writeError(errorMessage: string): void;
    writeWarning(warningMessage: string): void;
}


export class LocalLogger implements ILocalLogger {


    constructor( private file: string) {}

    writeLog(message: string): void {
        console.log(`%c[${this.file}]: ${message}`, COLORS.green);
    }

    writeError(errorMessage: string): void {
        console.log(`%c[${this.file} ERROR]: ${errorMessage}`, COLORS.red);
    }

    writeWarning(warningMessage: string): void {
        console.log(`%c[${this.file} WARNING]: ${warningMessage}`, COLORS.yellow);
    }

}
