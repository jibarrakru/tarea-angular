import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private authService: AuthService, private router: Router ) { }

  canActivate(): boolean {        
    if(this.authService.estaAutenticado()){
      return true;
    } else {      
      console.log('Guard está bloqueando esta ruta...');
      this.router.navigateByUrl('/login');      
      return false;
    }    
  }
  
}
