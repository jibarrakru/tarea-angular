import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  titulo: string = "Gestión de Usuarios";
  
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getAll().subscribe(
      e => this.usuarios = e
    )
  }

  delete(usuario: Usuario): void {
    console.log("Eliminando...");
    this.usuarioService.delete(usuario.id).subscribe(
      res=>this.usuarioService.getAll().subscribe(
        response=>this.usuarios=response
      )
    );
    console.log("Eliminado!");
  }

}
