import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { CrudServiceService } from '../service/crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  usuarios: User[]= [];

  constructor(private Crudservice: CrudServiceService, private router : Router){

  }
  ngOnInit(): void {
    this.conseguirUsuarios();

  }

  deleteUser(id:number):void {
    this.Crudservice.eliminarUsuario(id).subscribe( users => {
      this.conseguirUsuarios();
    });

  }

  updateUser(id_user:number){
    this.router.navigate([`/list/${id_user}`]);
  }

  conseguirUsuarios(){
    this.Crudservice.buscarUsuarios().subscribe(users=>{
      this.usuarios = users
    });
  }

}
