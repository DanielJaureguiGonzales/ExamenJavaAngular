import { Component } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { CrudServiceService } from '../service/crud-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.css']
})
export class CreacionComponent {
  newUser: User = {
    id_user: 0,
    tx_uid:      '',
    tx_user:     '',
    tx_email:    '',
    tx_pass:     '',
    tx_rol:      '',
    tx_fullname: '',
    tx_avatar:   ''
  };

  constructor(
    private CrudService: CrudServiceService,
    private router: Router,
  ){}

  onSubmit(){
      this.CrudService.crearUsuario(this.newUser).subscribe( resp =>{
        this.router.navigate(['/listar']);
      })
  }
}
