import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { FilmsProviderService } from '../services/films-provider.service';
import { IFilm } from '../models/film';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent {

    isModal:boolean = false;
    selectedFilm: IFilm;

    constructor(
        public modalService: ModalService,
        public filmsProviderService: FilmsProviderService
        ) {
    }

    open(film: IFilm) {
        this.selectedFilm = film;
        this.modalService.switchModal();
    }

    goTop() {
        let scrollToTop = window.setInterval(() => {
            let pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 60);
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    }
}
