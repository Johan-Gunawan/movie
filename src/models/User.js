import {db} from '../DexieDB';
import { hashPassword } from "../utils/Encryption";

export const getOneUserByToken = async (token) => {
    return await db.users.where('token').equals(token).first();
}

export const getOneUserByUsername = async (username) => {
    return await db.users.where('username').equals(username).first();
}

export const addUser = async (user) => {
    return await db.users.add({
        username : user.username,
        password : hashPassword(user.password).toString(),
        token : user.token
    })
}

export const updateToken = async () =>{
    return await db.users.update()
}