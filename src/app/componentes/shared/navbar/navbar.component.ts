import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'  
})
export class NavbarComponent {   

  constructor ( private authService: AuthService, private router: Router ) { }

  loggeado(): boolean {
    return this.authService.estaAutenticado();    
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
