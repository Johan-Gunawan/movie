import axios from "axios";

const GetListMovies = async (page) => {
    return await axios.get(process.env.REACT_APP_API_URL+'movie/now_playing?api_key='+REACT_APP_API_KEY+'&language=en-US&page='+page);
}



export {GetListMovies}