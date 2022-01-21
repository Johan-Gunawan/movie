import Dexie from 'dexie'
import { DATABASE } from './Constant';
export const db = new Dexie(DATABASE);
db.version(1).stores({
    favorite_movies : '++id, movie_id, user_id, title, description, vote_average, poster_path, release_date',
    users: '++id, username, password, token'
})
