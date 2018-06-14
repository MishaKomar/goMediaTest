import { Injectable } from '@angular/core';
import { IFilm } from '../models/film';

@Injectable()
export class FilmsProviderService {

    films: IFilm[] = [
        {
          name: 'Alan Partridge Mid Morning Matters',
          category: '15',
          year: 2015,
          posterUrl: '../assets/Shows/img_tv_01.png',
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
        },
        {
          name: 'Camping',
          category: 'PG',
          year: 2010,
          posterUrl: '../assets/Shows/img_tv_02.png',
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
              },
              {
                  name: 'Episode 7',
                  details: 'Episode 7',
                  time: '25',
                  imageUrl: '../../assets/Episodes/img_episode_03.png'
              },
              {
                  name: 'Episode 8',
                  details: 'Episode 8',
                  time: '25',
                  imageUrl: '../../assets/Episodes/img_episode_04.png'
              }
          ]
        },
        {
          name: 'Doll & Em',
          category: '15',
          year: 2015,
          posterUrl: '../assets/Shows/img_tv_03.png',
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
        },
        {
          name: 'Fleming',
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
        },
        {
          name: 'Guitar Star',
          category: 'PG',
          year: 2015,
          posterUrl: '../assets/Shows/img_tv_05.png',
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
        },
        {
          name: 'Alan Partridge Mid Morning Matters',
          category: '15',
          year: 2015,
          posterUrl: '../assets/Shows/img_tv_06.png',
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
        },
        {
          name: 'Alan Partridge Mid Morning Matters',
          category: '15',
          year: 2015,
          posterUrl: '../assets/Shows/img_tv_07.png',
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
        },
        {
          name: 'The Nightmare Worlds of HG Wells',
          category: '15',
          year: 2015,
          posterUrl: '../assets/Shows/img_tv_08.png',
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
        },
        {
          name: 'The Tunnel',
          category: '15',
          year: 2015,
          posterUrl: '../assets/Shows/img_tv_09.png',
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
              }
          ]
        },
        {
          name: 'The Southbank Show',
          category: 'PG',
          year: 2015,
          posterUrl: '../assets/Shows/img_tv_10.png',
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
        }
    ];
    
    constructor() {
    }

}
