import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NominacionServiceService } from 'src/app/services/nominacion-service.service';

@Component({
  selector: 'app-nominacion-update',
  templateUrl: './nominacion-update.page.html',
  styleUrls: ['./nominacion-update.page.scss'],
})
export class NominacionUpdatePage implements OnInit {
  datos:any={
    nombre:'',
    apellidos:'',
    telefono:'',
    licencia:'',
    nTracto:'',
    placaTracto:'',
    tipo:'',
    placas1:'',
    placas2:'',
    capacidad1:'',
    capacidad2:'',
    nEco1:'',
    nEco2:'',
    estacion:'',
    rfc:'',
    direccion:'',
    cre:''
  };

  idNominacion = null

  constructor(
   private route: ActivatedRoute,
   private nominacionService :NominacionServiceService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    //console.log(id,'Update nominacion');
    this.idNominacion = id;
    this.getNominacion(id);
  }

  getNominacion(id: String){
    this.nominacionService.getNominacionId(id).subscribe((data:any) =>{
      //console.log(data);
      this.datos = data.newFindNominacion;
    })
  }

  enviarForm(form){
    this.updateNominacion();
  }
  
  updateNominacion(){
    this.nominacionService.updateNominacionID(this.idNominacion,this.datos).subscribe((data:any)=>{
      console.log(data);
    });
  }

}
