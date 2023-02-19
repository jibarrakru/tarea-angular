import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from '../producto/producto';
import { ProductoService } from '../producto/producto.service';
import { ModalComponent } from '../shared/modal/modal.component';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {
  
  productos: Producto[] = [];
  item: Producto = new Producto();

  constructor( private productoService: ProductoService ) { }

  ngOnInit(): void {
    this.productoService.getAll().subscribe(
      e => this.productos = e
    )
  }

  pasarItem(producto: Producto) {
    console.log('Producto: ' + producto.id);    
    this.item = producto;
  }

}
