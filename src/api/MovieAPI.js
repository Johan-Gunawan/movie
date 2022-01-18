import instance from "./Axios";
import {dataMovie} from './FetchURL';

const GetListMovies = async (page) => {
    return await instance.get(dataMovie.nowPlayingMovie);
}

export {GetListMovies}