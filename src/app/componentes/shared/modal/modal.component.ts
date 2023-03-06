import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../producto/producto';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() producto: Producto = new Producto();

  ngOnInit(): void {
    console.log(this.producto);
  }

}
