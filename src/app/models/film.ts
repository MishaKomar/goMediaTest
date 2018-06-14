import { IEpisode } from './episode';

export class IFilm {
    constructor(
        public name: string,
        public category: string,
        public year: number,
        public posterUrl: string,
        public coverUrl: string,
        public episodes: IEpisode[],
    ) {        
    }
}