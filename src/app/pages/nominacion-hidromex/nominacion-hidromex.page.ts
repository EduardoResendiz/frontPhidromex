import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Columns, PdfMakeWrapper, Txt, Table, Cell, Img } from 'pdfmake-wrapper';
import { NominacionServiceService } from 'src/app/services/nominacion-service.service';
import { NominacionModelPage } from '../nominacion-model/nominacion-model.page';
@Component({
  selector: 'app-nominacion-hidromex',
  templateUrl: './nominacion-hidromex.page.html',
  styleUrls: ['./nominacion-hidromex.page.scss'],
})
export class NominacionHidromexPage implements OnInit {
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

  lengthNominacion = null;
  arrayNominacio = [];
  constructor(
    private route :ActivatedRoute,
    private nominacionService: NominacionServiceService,
    private modalCtrl:ModalController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('custom_id');
    console.log('id traido', id);
    this.getDatos();
  }
  enviarForm(form){
    this.postDatos();
    this.navCtrl.navigateForward('/inicio', {animated: true});
  }

  postDatos(){
    this.nominacionService.postNominacion(this.datos).subscribe((data:any) =>{
      console.log(data);
    })
  }

  getDatos(){
    this.nominacionService.getNominacion().subscribe((data:any) =>{
      //console.log(data.nominacion);
      this.lengthNominacion = data.nominacion.length;
      this.arrayNominacio = data.nominacion;
      console.log('array', this.arrayNominacio);
      
    })
  }

  async openModal(){
    const modal = await this.modalCtrl.create({
      component: NominacionModelPage,
    });
    return await modal.present();
  }
  
  async pdf(){
    const pdf = new PdfMakeWrapper();
    //Header
    pdf.header(
      new Columns([
        [
        [
          await new Img('./iconHidromex.png').
          height(80).
          width(160).
          margin([20,10]).
          build()
        ],
        new Txt('nfjnfj').bold().end,
      ]
    ]).columnGap(100).end
    );
    // background
    pdf.background(
      [
        await new Img('./iconHidromex.png').
        height(200).
        width(400).
        opacity(0.3).
        margin([200,200]).
        build()
      ]
    );
    //Table
    pdf.add(
      new Table([
      [
          new Txt(`ffd`).bold().fontSize(5).decorationColor('#add9ea').end,
          new Txt(`ffd`).bold().fontSize(5).color('#add9ea').end,
          new Txt(`ffd`).bold().fontSize(5).background('#add9ea').end,
          new Txt(`ffd`).bold().fontSize(5).end,
          new Txt(`ffd`).bold().fontSize(5).end,
          new Txt(`ffd`).bold().fontSize(5).end,
          new Txt(`ffd`).bold().fontSize(5).end,
          new Txt(`ffd`).bold().fontSize(5).end,
          new Txt(`ffd`).bold().fontSize(5).end,
          new Txt(`ffd`).bold().fontSize(5).end,
          new Txt(`ffd`).bold().fontSize(5).end,
          new Txt(`ffd`).bold().fontSize(5).end,
          new Txt(`ffd`).bold().fontSize(5).end,
          new Txt(`ffd`).bold().fontSize(5).end,
          new Txt(`ffd`).bold().fontSize(5).end,
          new Txt(`ffd`).bold().fontSize(5).end,
      ],
      [
          new Txt(`NOMBRE`).bold().fontSize(5).background('#cce7f9').end,
          new Txt(`TELÉFONO`).bold().fontSize(5).end,
          new Txt(`LICENCIA`).bold().fontSize(5).end,
          new Txt(`NO.DE TRACTO`).bold().fontSize(5).end,
          new Txt(`PLACA TRACTO`).bold().fontSize(5).end,
          new Txt(`TIPO(FULL/SENCILLO`).bold().fontSize(5).end,
          new Txt(`PLACAS`).bold().fontSize(5).end,
          new Txt(`CAPACIDAD`).bold().fontSize(5).end,
          new Txt(`NO.ECO`).bold().fontSize(5).end,
          new Txt(`PLACAS`).bold().fontSize(5).end,
          new Txt(`CAPACIDAD`).bold().fontSize(5).end,
          new Txt(`NO.ECO`).bold().fontSize(5).end,
          new Txt(`Estación`).bold().fontSize(5).end,
          new Txt(`RFC`).bold().fontSize(5).end,
          new Txt(`Dirección`).bold().fontSize(5).end,
          new Txt(`CRE`).bold().fontSize(5).end,
      ]
    ]).widths([80,30,35,20,20,25,30,30,30,20,30,30,50,40,120,60]).margin([0,80,0,0]).end
    );

    for (let i = 0; i < this.lengthNominacion; i++) {
      pdf.add(
        new Table([
        [
            new Txt(`${this.arrayNominacio[i].nombre} ${this.arrayNominacio[i].apellidos}`).bold().fontSize(5).end,
            new Txt(`${this.arrayNominacio[i].telefono}`).bold().fontSize(5).end,
            new Txt(`${this.arrayNominacio[i].licencia}`).bold().fontSize(5).end,
            new Txt(`${this.arrayNominacio[i].nTracto}`).bold().fontSize(5).end,
            new Txt(`${this.arrayNominacio[i].placaTracto}`).bold().fontSize(5).end,
            new Txt(`${this.arrayNominacio[i].tipo}`).bold().fontSize(5).end,
            new Txt(`${this.arrayNominacio[i].placas1}`).bold().fontSize(5).end,
            new Txt(`${this.arrayNominacio[i].capacidad1}`).bold().fontSize(5).end,
            new Txt(`${this.arrayNominacio[i].nEco1}`).bold().fontSize(5).end,
            new Txt(`${this.arrayNominacio[i].placas2}`).bold().fontSize(5).end,
            new Txt(`${this.arrayNominacio[i].capacidad2}`).bold().fontSize(5).end,
            new Txt(`${this.arrayNominacio[i].nEco2}`).bold().fontSize(5).end,
            new Txt(`${this.arrayNominacio[i].estacion}`).bold().fontSize(5).end,
            new Txt(`${this.arrayNominacio[i].rfc}`).bold().fontSize(5).end,
            new Txt(`${this.arrayNominacio[i].direccion}`).bold().fontSize(5).end,
            new Txt(`${this.arrayNominacio[i].cre}`).bold().fontSize(5).end,
        ]
    ]).widths([80,30,35,20,20,25,30,30,30,20,30,30,50,40,120,60]).end);

    }
    pdf.pageMargins([20, 30, 30, 20]);
    pdf.pageOrientation('landscape');
    pdf.create().open();
    
  }
  
}
