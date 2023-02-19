import { Component, OnInit } from '@angular/core';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  titulo: string = "Gestión de Productos";
  
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.productoService.getAll().subscribe(
      e => this.productos = e
    )
  }

  delete(producto: Producto): void {
    console.log("Eliminando...");
    this.productoService.delete(producto.id).subscribe(
      res=>this.productoService.getAll().subscribe(
        response=>this.productos=response
      )
    );
    console.log("Eliminado!");
  }

}
