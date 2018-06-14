import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {

    films = [
        {
          name: 'Alan Partridge Mid Morning Matters',
          episodes: 6,
          category: '15',
          year: 2015,
          posterUrl: '../assets/Shows/img_tv_01.png',
        },
        {
          name: 'Camping',
          episodes: 8,
          category: 'PG',
          year: 2010,
          posterUrl: '../assets/Shows/img_tv_02.png',
        },
        {
          name: 'Doll & Em',
          episodes: 6,
          category: '15',
          year: 2015,
          posterUrl: '../assets/Shows/img_tv_03.png',
        },
        {
          name: 'Fleming',
          episodes: 6,
          category: '15',
          year: 2015,
          posterUrl: '../assets/Shows/img_tv_04.png',
        },
        {
          name: 'Guitar Star',
          episodes: 6,
          category: 'PG',
          year: 2015,
          posterUrl: '../assets/Shows/img_tv_05.png',
        },
        {
          name: 'Alan Partridge Mid Morning Matters',
          episodes: 6,
          category: '15',
          year: 2015,
          posterUrl: '../assets/Shows/img_tv_06.png',
        },
        {
          name: 'Alan Partridge Mid Morning Matters',
          episodes: 6,
          category: '15',
          year: 2015,
          posterUrl: '../assets/Shows/img_tv_07.png',
        },
        {
          name: 'The Nightmare Worlds of HG Wells',
          episodes: 6,
          category: '15',
          year: 2015,
          posterUrl: '../assets/Shows/img_tv_08.png',
        },
        {
          name: 'The Tunnel',
          episodes: 4,
          category: '15',
          year: 2015,
          posterUrl: '../assets/Shows/img_tv_09.png',
        },
        {
          name: 'The Southbank Show',
          episodes: 6,
          category: 'PG',
          year: 2015,
          posterUrl: '../assets/Shows/img_tv_10.png',
        },
    ];

    constructor() {

    }

    ngOnInit () {

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
