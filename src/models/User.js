import {db} from '../DexieDB'

export const getOneUserByToken = async (token) => {
    return await db.users.where('token').equals(token).first();
}