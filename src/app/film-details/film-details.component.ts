import { Component, Input } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { IFilm } from '../models/film';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent {

    @Input() film: IFilm;

    constructor(
      public modalService: ModalService) {}
    
}
