import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NominacionDocsService {

  constructor(
    private http: HttpClient
  ) { }

  uploadImage(title: string, description:string, photo: File, choferID:string){
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('choferID', choferID);
    fd.append('myfile', photo);
    return this.http.post('http://localhost:3000/licenciaOp/create', fd);
  }
  
  getnominacionDocs(){
    return this.http.get('http://localhost:3000/licenciaOp/');
  }

  getNominacionDocsId(id: String){
    return this.http.get(`http://localhost:3000/licenciaOp/${id}`);
  }

}
