import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {

    activeToInactiveCounter: number  = 0;
    inactiveToActiveCounter: number  = 0;

    incrementActiveToInactive() {
        this.activeToInactiveCounter++;
        console.log('activeToInactiveCounter: ' + this.activeToInactiveCounter);
    }

    incrementInactiveToActive() {
        this.inactiveToActiveCounter++;
        console.log('inactiveToActiveCounter: ' + this.inactiveToActiveCounter);
    }
}