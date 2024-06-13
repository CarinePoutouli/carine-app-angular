import { Injectable } from '@angular/core';
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

setToken(value: string) {
  localStorage.setItem('token', value)
}

getToken() {
  return localStorage.getItem('token')
}

decodeToken(){
    const token = this.getToken()
  if (token !== null ){
   return jwtDecode(token)
  }
  return null
}

removeToken() {
  localStorage.removeItem('token')
}

isExpire(){
  const token = this.getToken()
  if (token !== null){
    const tokenDecoded = jwtDecode(token)
    const dateNow = new Date()
    return tokenDecoded.exp! < dateNow.getTime() / 1000;
  }
  return true
}
}
