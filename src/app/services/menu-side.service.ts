import { Injectable } from '@angular/core';

@Injectable()
export class MenuSideService {

    menuState: string = 'out'; // or 'in'

    constructor() {
    }

    toggleMenu() {
        // 1-line if statement that toggles the value:
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }
    isOpen() {
        return this.menuState == 'in' ? true : false;
    }
}
