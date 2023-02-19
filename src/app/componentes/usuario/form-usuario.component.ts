import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
  
  usuario: Usuario = new Usuario();
  titulo: string = "Registro de Usuario";

  constructor(private usuarioService: UsuarioService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.activatedRoute.params.subscribe(
      e => {
        let id = e['id'];
        if (id) {
          this.usuarioService.get(id).subscribe(
            es => this.usuario = es
          );
        }
      }
    );
  }

  create(): void {
    console.log(this.usuario);
    this.usuarioService.create(this.usuario).subscribe(
      res => this.router.navigate(['/usuarios'])
    );
  }

  update(): void {
    this.usuarioService.update(this.usuario).subscribe(
      res => this.router.navigate(['/usuarios'])
    );
  }

}
