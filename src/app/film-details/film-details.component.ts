import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {

    @Output() onToogle = new EventEmitter();

    film = {
        name: 'Fleming',
        episodesCount: 6,
        category: '15',
        year: 2015,
        posterUrl: '../assets/Shows/img_tv_04.png',
        coverUrl: '../../assets/Index/02-img_home_tv.png',
        episodes: [
            {
                name: 'Episode 1',
                details: 'Episode 1',
                time: '25',
                imageUrl: '../../assets/Episodes/img_episode_01.png'

            },
            {
                name: 'Episode 2',
                details: 'Episode 2',
                time: '25',
                imageUrl: '../../assets/Episodes/img_episode_02.png'
            },
            {
                name: 'Episode 3',
                details: 'Episode 3',
                time: '25',
                imageUrl: '../../assets/Episodes/img_episode_03.png'

            },
            {
                name: 'Episode 4',
                details: 'Episode 4',
                time: '25',
                imageUrl: '../../assets/Episodes/img_episode_04.png'

            },
            {
                name: 'Episode 5',
                details: 'Episode 5',
                time: '25',
                imageUrl: '../../assets/Episodes/img_episode_05.png'

            },
            {
                name: 'Episode 6',
                details: 'Episode 6',
                time: '25',
                imageUrl: '../../assets/Episodes/img_episode_06.png'

            }
        ]
    }; 

    constructor() {}
    
    toggleMenu() {
        // 1-line if statement that toggles the value:
        // this.menuState = this.menuState === 'out' ? 'in' : 'out';
        this.onToogle.emit();
    }

    ngOnInit () {

    }
}
