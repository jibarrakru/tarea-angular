import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario: Usuario;
  titulo: string = 'LogIn';

  constructor ( private authService: AuthService, private router: Router) { 
    this.usuario = new Usuario();
  }

  login() {
    this.authService.login(this.usuario);
    this.router.navigateByUrl('/menu');
  }

  print(): void {
    console.log(this.usuario.email);
  }

}
