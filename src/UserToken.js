export const setToken = (token) => {
    sessionStorage.setItem('token',token);
}

export const getToken = () => {
    const token = sessionStorage.getItem('token');
    return  token === null ? '' : token;
}

export const deleteToken = () => {
    sessionStorage.removeItem('token');
}