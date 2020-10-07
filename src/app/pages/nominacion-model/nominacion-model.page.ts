import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NominacionServiceService } from 'src/app/services/nominacion-service.service';

@Component({
  selector: 'app-nominacion-model',
  templateUrl: './nominacion-model.page.html',
  styleUrls: ['./nominacion-model.page.scss'],
})
export class NominacionModelPage implements OnInit {
  getData:any=[];
  albums: any= [];
  searchText = '';
  constructor(
    private modalCtrl:ModalController,
    private getNominacion: NominacionServiceService,
    private route: Router
  ) { }

  ngOnInit() {
  this.getNominacionService();
  }

  onSearchChange($event){
    this.searchText = $event.detail.value;
  }

  getNominacionService(){
    this.getNominacion.getNominacion().subscribe((data:any)=>{
      //console.log(data.nominacion);
      this.getData = data.nominacion;
      console.log(this.getData);
    })
  }

  verMas(id: String){
   // console.log('verMas', id);
    this.route.navigate(['nominacion-read', {custom_id: id}]);
    this.dismiss();
  }

  settings(id: String){
   // console.log('settings', id);
    this.route.navigate(['nominacion-update', {custom_id: id}]);
    this.dismiss();
  }

  delete(id:string){
    this.getNominacion.deleteNominacionID(id).subscribe((data:any) =>{
      //console.log(data);
      this.dismiss();
    });
  }

  upload(id: String){
   // console.log('settings', id);
    this.route.navigate(['subir-docs', {custom_id: id}]);
    this.dismiss();
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

}
