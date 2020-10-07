import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NominacionDocsService } from 'src/app/services/nominacion-docs.service';
import { NominacionServiceService } from 'src/app/services/nominacion-service.service';

@Component({
  selector: 'app-nominacion-read',
  templateUrl: './nominacion-read.page.html',
  styleUrls: ['./nominacion-read.page.scss'],
})
export class NominacionReadPage implements OnInit {

  datos:any=[];

  constructor(
    private route: ActivatedRoute,
    private nominacionService: NominacionServiceService,
    private nominacionDocs: NominacionDocsService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
   // console.log(id,'Read nominacion');
   this.getDataId(id);
   this.getPrueba();
  }

  getDataId(id: String){
    this.nominacionService.getNominacionId(id).subscribe((data:any)=>{
     // console.log(data);
      this.datos = data.newFindNominacion;
    })
  }

  getPrueba(){
    this.nominacionDocs.getnominacionDocs().subscribe((data:any)=>{
      console.log(data,'nominacionDocs');
      //this.datos = data.newFindNominacion;
      
    })
  }
  openConsultaDocs(){
    this.navCtrl.navigateForward('/consultar-docs');
  }

}
