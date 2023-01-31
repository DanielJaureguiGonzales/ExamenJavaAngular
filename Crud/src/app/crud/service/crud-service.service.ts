import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {


  private apiUrl="http://localhost:8080/user"

  constructor(private httpClient:HttpClient) { }

  buscarUsuarios(): Observable<User[]> {
    const url = `${this.apiUrl}/list`;
    return this.httpClient.get<User[]>(url)
  }

  crearUsuario(user:User): Observable<User> {
    const url = `${this.apiUrl}/create`;
    user.tx_uid = Math.random().toString(16).slice(2);
    return this.httpClient.post<User>(url,user)
  }

  eliminarUsuario(id:number) {
    const url = `${this.apiUrl}/delete/${id}`;
    return this.httpClient.delete(url);
  }

  actualizarUsuario(user:User) {
    const url= `${this.apiUrl}/update/${user.id_user}`;
    return this.httpClient.put<User>(url,user)
  }


  getById(id:number):Observable<User> {
    const url = `${this.apiUrl}/list/${id}`;
    return this.httpClient.get<User>(url);
  }


}


