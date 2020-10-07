import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   url ='http://localhost:3000/user';
  constructor(
    private http:HttpClient
  ) { }

    getUser(){
     return this.http.get(`${this.url}/`);
    }

    postUser(form){
     return this.http.post(`${this.url}/create`,form);
    }

    getUserId(id:string){
      return this.http.get(`${this.url}/${id}`);
    }
}
