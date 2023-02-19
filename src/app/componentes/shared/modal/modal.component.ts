import { Component, Input } from '@angular/core';
import { Producto } from '../../producto/producto';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() producto: Producto = new Producto();;

}
