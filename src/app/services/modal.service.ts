import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {

    private isModalShowed: boolean = false;

    constructor() {
    }

    switchModal() {
        this.isModalShowed = !this.isModalShowed;
    }
    isShowed() {
        return this.isModalShowed;
    }
}
