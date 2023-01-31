import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { User } from '../interfaces/user.interface';
import { CrudServiceService } from '../service/crud-service.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit{
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

  constructor(private route: ActivatedRoute, private CrudService: CrudServiceService){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
