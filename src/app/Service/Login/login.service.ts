import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder, Validators} from "@angular/forms";
import {environment} from "../../../environments/environment";


const BASE = environment.APIURL+`api`;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private bf: FormBuilder
  ) { }

  loginForm = this.bf.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  registerForm = this.bf.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required]
  });


  login(data: any) {
    return this.http.post(BASE+`/login`, data);
  }

  register(data: any) {
    return this.http.post(BASE+`/register`, data);
  }

  getalluser(){
    return this.http.get(BASE+`/user` );
  }
}
