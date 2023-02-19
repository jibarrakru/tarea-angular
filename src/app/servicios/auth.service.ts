import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Usuario } from '../componentes/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenUsuario: string = '';  

  constructor( private http: HttpClient ) { }

  estaAutenticado(): boolean {
    return this.tokenUsuario.length > 2;
  }

  nuevoUsuario(usuario: Usuario) {

  }

  login(usuario: Usuario) {
    // Aquí se realiza la peticion post al backend. NO está implementado    
    this.tokenUsuario = usuario.password + 'jim92@';    
    console.log('Sesión iniciada. Token de usuario loggeado: ' + this.tokenUsuario);      
  }

  logout() {
    this.tokenUsuario = '';
    console.log('Sesión finalizada.');
  }

}
