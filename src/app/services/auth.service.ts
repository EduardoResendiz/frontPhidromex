import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { environment } from '../../environments/environment';

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = null;
  usuario = {};
  idUser = null;


  constructor(
    private http: HttpClient,
    private navCtrl:  NavController,
    private alertCtrl: AlertController
  ) { }

  login(email: string, password: string){
    const data ={
      email,
      password
    };

    return new Promise(resolve =>{
      this.http.post('http://localhost:3000/user/login', data).subscribe( res =>{
        //console.log(res,'respuesta');
       //console.log(res['usuarioEncontrado']._id);
       
        if (res) {
          this.guardarToken(res['token']);
          this.guardarIdUser(res['usuarioEncontrado']._id);
          resolve(true);
        }else{
          this.token = null;
          localStorage.clear();
          this.presentarAlarma();
          resolve(false);
        }
        
      });
    });
  }
  async guardarToken(token: string){
    this.token = token;
    await localStorage.setItem('token', token);  
  }

  async guardarIdUser(id: string){
    this.idUser = id;
    await localStorage.setItem('id', id);  
  }

  async cargarToken(){
    this.token = await localStorage.getItem('token') || null;
  }
  
  async validarToken(): Promise<boolean>{
      await this.cargarToken();
      if (!this.token) {
        this.navCtrl.navigateRoot('/login');
        return Promise.resolve(false);
      }
      return new Promise<boolean>(resolve => {
        const headers = new HttpHeaders({
          'Authorization': this.token
        });
        this.http.get(`${url}/user/auth`, {headers}).subscribe(res => {
          if (res['ok']) {
            resolve(true);
          } else {
            this.navCtrl.navigateRoot('/login');
            localStorage.clear();
            resolve(false);
          }
        });
      });
    }

  async presentarAlarma(){
    const alarma = await this.alertCtrl.create({
      header: 'Aviso!',
      message: 'Usuario o Contraseña: Incorrectos',
      buttons: ['Entendido']
    });
    await alarma.present();
  }
}
