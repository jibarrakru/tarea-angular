import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../producto/producto';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() producto: Producto = new Producto();  

  ngOnInit(): void {
    console.log(this.producto);
  }
  
}
