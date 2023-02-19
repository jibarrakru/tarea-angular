import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./componentes/login/login.component";
import { MenuComponent } from "./componentes/menu/menu.component";
import { FormProductoComponent } from "./componentes/producto/form-producto.component";
import { ProductoComponent } from './componentes/producto/producto.component';
import { ModalComponent } from "./componentes/shared/modal/modal.component";
import { ShowcaseComponent } from "./componentes/showcase/showcase.component";
import { FormUsuarioComponent } from "./componentes/usuario/form-usuario.component";
import { UsuarioComponent } from "./componentes/usuario/usuario.component";
import { AuthGuard } from "./guards/auth.guard";

const APP_ROUTES: Routes = [    
    { path: 'login', component: LoginComponent },
    { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
    { path: 'usuarios', component: UsuarioComponent, canActivate: [AuthGuard] },    
    { path: 'usuarios/form', component: FormUsuarioComponent, canActivate: [AuthGuard] },
    { path: 'usuarios/form/:id', component: FormUsuarioComponent, canActivate: [AuthGuard] },
    { path: 'productos', component: ProductoComponent, canActivate: [AuthGuard] },
    { path: 'productos/form', component: FormProductoComponent, canActivate: [AuthGuard] },
    { path: 'productos/form/:id', component: FormProductoComponent, canActivate: [AuthGuard] },    
    { path: 'showcase', component: ShowcaseComponent },
    { path: 'showcase/:id', component: ModalComponent },
    { path: 'modal', component: ModalComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);