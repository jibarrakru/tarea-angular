import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url: string = "http://localhost:8080/ecommerce/productos";

  constructor(private http: HttpClient) { }

  // Obtener productos
  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }

  // Crear producto
  create(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.url, producto);
  }

  // Obtener un producto
  get(id: number): Observable<Producto> {
    return this.http.get<Producto>(this.url + '/' + id);
  }

  // Actualizar un producto
  update(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(this.url, producto);
  }

  // Eliminar un producto
  delete(id: number): Observable<Producto> {
    return this.http.delete<Producto>(this.url + '/' + id);
  }

}
