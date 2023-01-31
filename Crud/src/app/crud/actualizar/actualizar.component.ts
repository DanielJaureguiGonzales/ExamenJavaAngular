import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }     from '@angular/router';
import { switchMap } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { CrudServiceService } from '../service/crud-service.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit{
  newUser!: User;

  constructor(private route: ActivatedRoute, private CrudService: CrudServiceService,private router: Router){

  }
  ngOnInit(): void {
    this.route.params
    .pipe(switchMap(( {id} )=> this.CrudService.getById(id))
    )
    .subscribe(user => this.newUser = user);
  }

  onSubmit(user:User): void {

    this.CrudService.actualizarUsuario(user).subscribe( resp =>{
      this.router.navigate(['/listar']);
    })

  }
}
