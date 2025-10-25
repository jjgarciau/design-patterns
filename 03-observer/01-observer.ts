/**
 * ! Patrón Observer
 * El patrón Observer es un patrón de diseño de comportamiento que establece
 * una relación de uno a muchos entre un objeto, llamado sujeto,
 * y otros objetos, llamados observadores, que son notificados
 * y actualizados automáticamente por el sujeto
 * cuando se producen cambios en su estado.
 *
 * * Es útil cuando necesitamos que varios objetos estén
 * * pendientes de los cambios
 *
 * !No confundirlo con RXJS Observables
 *
 * https://refactoring.guru/es/design-patterns/observer
 */

import { COLORS } from "../helpers/colors.ts";


interface Observer {
    notify(videoTitle: string): void;
}

class YouTubeChannel {
    private observers: Observer[] = []
    private channelName: string;

    constructor(channelName: string) {
        this.channelName = channelName;
    }
    
    subscribe(observer: Observer): void {
        this.observers.push(observer);
        console.log(`se ha suscrito al canal ${this.channelName}`, COLORS.green);
    }

    unsubscribe(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
        console.log(`se ha dado de baja del canal ${this.channelName}`, COLORS.red);
    }

    notifyObservers(videoTitle: string): void {
        for (const observer of this.observers) {
            observer.notify(videoTitle);
        }
        console.log(`%cNotificados ${this.observers.length} suscriptores sobre el nuevo video: ${videoTitle}`, COLORS.yellow);
    }

    uploadVideo(videoTitle: string): void {
        console.log(`%cNuevo video subido al canal ${this.channelName}: ${videoTitle}`, COLORS.blue);
        this.notifyObservers(videoTitle);
    }
}


class Subscriber implements Observer {
    private name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    notify(videoTitle: string): void {
        console.log(`%c${this.name}, nuevo video disponible: ${videoTitle}`, COLORS.purple, );
    }
}   


function main() {
    const channel = new YouTubeChannel("Programación Fácil");

    const juan = new Subscriber("Juan");
    const maria = new Subscriber("María");
    const pedro = new Subscriber("Pedro");

    channel.subscribe(juan);
    channel.subscribe(maria);

    channel.uploadVideo("Patrón Observer en TypeScript");

    channel.subscribe(pedro);

    channel.uploadVideo("Patrón Singleton en TypeScript");

    channel.unsubscribe(maria);

    channel.uploadVideo("Patrón Adapter en TypeScript");
}


main();