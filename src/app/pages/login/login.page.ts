import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { RegistrarModalPage } from '../registrar-modal/registrar-modal.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser = {
    email:'',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private route: Router
  ) { }

  ngOnInit() {
    localStorage.clear();  
  }
  
  async goInside(form) {
      if (form.invalid) {
        console.log('Está mal');
        return;
      }
      const valido = await this.authService.login(this.loginUser.email, this.loginUser.password);
      console.log(valido, '1', );
      if (valido) {
        this.navCtrl.navigateRoot('/inicio', {animated: true});
        
      } else {
        //this.presentarAlarma();
        console.log('Inválido');
      }
    }
    userId(id: string){
      this.route.navigate(['/inicio', {animated: true}, {custom_id: id}]);
    }

    async post(){
      const modal = await this.modalCtrl.create({
        component: RegistrarModalPage,
      });
      return await modal.present();
    }
}
