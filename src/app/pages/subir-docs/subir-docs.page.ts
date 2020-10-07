import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NominacionDocsService } from 'src/app/services/nominacion-docs.service';

@Component({
  selector: 'app-subir-docs',
  templateUrl: './subir-docs.page.html',
  styleUrls: ['./subir-docs.page.scss'],
})
export class SubirDocsPage implements OnInit {
  file : File;
  uploadedFiles: Array <File>
  photoSelected: string | ArrayBuffer;
  choferID ='';

  constructor(
    private route: ActivatedRoute,
    private _uploadService: NominacionDocsService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('custom_id');
    //console.log(id,'Read nominacion');
    this.choferID = id;
    this.getDatas();
  }

  
  uploadPhoto(title: HTMLInputElement, description: HTMLInputElement){
    this._uploadService.uploadImage(title.value, description.value, this.file, this.choferID).subscribe(data => console.log(data));
    //this.navCtrl.navigateForward('/punto-uno');
  }
  
  onPhotoSelected(event): void{
   if(event.target.files && event.target.files[0]){
     this.file = <File>event.target.files[0];
     //Vista de la imagen
     const reader = new FileReader();
     reader.onload = e =>this.photoSelected = reader.result;
     reader.readAsDataURL(this.file);
   }
  }

  getDatas(){
    this._uploadService.getnominacionDocs().subscribe((data:any)=>{
      console.log(data,'Estos son tus datos');
      
    })
  }

}
