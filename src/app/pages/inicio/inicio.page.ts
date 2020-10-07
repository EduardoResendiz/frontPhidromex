import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  datosUser:any[]=[];
  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.getUser();
  }
  getUser(){
    let id = localStorage.getItem("id");
    //console.log(id,'Pagina Inicio');
    this.userService.getUserId(id).subscribe((data:any)=>{
      //console.log(data);
      this.datosUser = [data.newFindUser];
      console.log(this.datosUser);
    })
  }
}
