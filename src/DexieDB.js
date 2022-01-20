import Dexie from 'dexie'
import { DATABASE } from './Constant';
export const db = new Dexie(DATABASE);
db.version(1).stores({
    favorite_movies : 'id, title, description, vote, poster, release_date',
    users: '++id, username, password, token'
})
