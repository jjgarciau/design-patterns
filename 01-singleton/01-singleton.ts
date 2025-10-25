/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

import { COLORS } from "../helpers/colors.ts";


class DragonBalls {
    private static instance: DragonBalls;
    private ballsCollected: number;
    private constructor() {
        this.ballsCollected = 0;
    }

    public static getInstance(): DragonBalls {
        if (!DragonBalls.instance) {
            DragonBalls.instance = new DragonBalls();
        } 

        return DragonBalls.instance;
    }

    public collectBall(): void {
        this.ballsCollected++;
        console.log(`Has recolectado una esféra del dragón, Total: ${this.ballsCollected}`);
    }

    public summonShenlong(): void {
        if (this.ballsCollected >= 7) {
            console.log(`${COLORS.yellow}Shenlong has been summoned! Make your wish!`);
            this.ballsCollected = 0; // Reset after summoning
        }
        else {
            console.log(`${COLORS.red}You need ${7 - this.ballsCollected} more dragon balls to summon Shenlong.`);
        }
    }
}


function main() {
    const gokuDragonBalls = DragonBalls.getInstance();
    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();
    gokuDragonBalls.collectBall();
    
    
    const vegetaDragonBalls = DragonBalls.getInstance();
    
    vegetaDragonBalls.collectBall();
    vegetaDragonBalls.collectBall();
    vegetaDragonBalls.collectBall();

    gokuDragonBalls.summonShenlong();

    console.log('¿Ambas referencias son iguales?', gokuDragonBalls === vegetaDragonBalls); // true
}


main();