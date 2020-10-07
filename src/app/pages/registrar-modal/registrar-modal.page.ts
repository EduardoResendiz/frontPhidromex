import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-registrar-modal',
  templateUrl: './registrar-modal.page.html',
  styleUrls: ['./registrar-modal.page.scss'],
})
export class RegistrarModalPage implements OnInit {

  postUser = {
    email: '',
    nombre: '',
    apellido: '',
    password: '',
    password2:''
  }

  constructor(
    private modalCtrl: ModalController,
    private usuarioService: UsersService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  enviarForm(formulario){
    if (this.postUser.password === this.postUser.password2) {
      this.postUsuario(this.postUser);
    }else{
      this.presentAlert();
    }
    
  }

  postUsuario(data){
    this.usuarioService.postUser(this.postUser).subscribe((data:any)=>{
      console.log(data);
      this.toast();
    });
  }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Verificar tus datos ingresados',
      buttons: ['Entendido']
    });
    await alert.present();
  }

  async toast(){
    const toast = await this.toastCtrl.create({
      message: 'Su registro fue exitoso',
      position: 'middle',
      duration: 3000
    });
    toast.present();
  }

}
