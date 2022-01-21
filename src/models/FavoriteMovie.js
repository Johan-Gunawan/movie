import {db} from '../DexieDB';

export const getOneFavoriteMovie = async (id,userId) =>{
    return await db.favorite_movies.where({movie_id : id, user_id : userId}).first()
}

export const getAllFavoriteMovieByUserId = async (userId) => {
    return await db.favorite_movies.where({user_id : userId}).toArray();
}

export const addOneFavoriteMovie = async (movie,userId) => {
    return await db.favorite_movies.add({
        user_id : userId,
        movie_id : movie.id,
        title : movie.title,
        description : movie.overview,
        vote_average : movie.vote_average,
        poster_path : movie.poster_path,
        release_date : movie.release_date
    });
}

export const deleteOneFavoriteMovie = async (id,userId) => {
    return await db.favorite_movies.where({movie_id : id, user_id : userId}).delete(id);
}