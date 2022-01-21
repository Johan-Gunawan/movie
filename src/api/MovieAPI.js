import instance from "./Axios";
import {dataMovie, detailMovie} from './FetchURL';

const GetListMovies = async (page) => {
    return await instance.get(dataMovie.nowPlayingMovie);
}

const GetDetailMovie = async (id) => {
    return await instance.get(detailMovie(id));
}

export {GetListMovies,GetDetailMovie}