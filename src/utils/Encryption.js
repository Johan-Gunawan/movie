import CryptoJS from 'crypto-js';


export const hashPassword = (password) => {
  return CryptoJS.SHA256(password);
}

export const comparePassword = (password,hashPassword) => {
  if(CryptoJS.SHA256(password).toString() === hashPassword){
    return true;
  }
  return false;
}