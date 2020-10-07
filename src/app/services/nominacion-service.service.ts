import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NominacionServiceService {

  constructor(
    private http: HttpClient
  ) { }

  postNominacion(form){
    return this.http.post('http://localhost:3000/nominacion/create',form);
  }

  getNominacion(){
   return this.http.get('http://localhost:3000/nominacion/');
  }

  getNominacionId(id: String){
    return this.http.get(`http://localhost:3000/nominacion/${id}`);
  }

  updateNominacionID(id:string, body){
    return this.http.put(`http://localhost:3000/nominacion/${id}`,body)
  }

  deleteNominacionID(id:String){
    return this.http.delete(`http://localhost:3000/nominacion/${id}`);
  }
}
