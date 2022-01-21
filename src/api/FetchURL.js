import {API_KEY} from '../Constant';

export const dataMovie = {
    nowPlayingMovie : '/movie/now_playing?api_key='+API_KEY+'&language=en-US',
}

export const detailMovie = (id) => {
    return `/movie/${id}?api_key=${API_KEY}&language=en-US`
} 