import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private url: string = "http://localhost:8080/ecommerce/usuarios";

  constructor(private http: HttpClient) { }

  // Obtener productos
  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  // Crear usuario
  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario);
  }

  // Obtener un usuario
  get(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.url + '/' + id);
  }

  // Actualizar un usuario
  update(usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.url, usuario);
  }

  // Eliminar un usuario
  delete(id: number): Observable<Usuario> {
    return this.http.delete<Usuario>(this.url + '/' + id);
  }

}
