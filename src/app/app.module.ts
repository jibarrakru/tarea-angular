import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTING } from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { NavbarComponent } from './componentes/shared/navbar/navbar.component';
import { FormProductoComponent } from './componentes/producto/form-producto.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { FormUsuarioComponent } from './componentes/usuario/form-usuario.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { ShowcaseComponent } from './componentes/showcase/showcase.component';
import { ModalComponent } from './componentes/shared/modal/modal.component';

// Servicios

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    NavbarComponent,    
    FormProductoComponent,
    UsuarioComponent,
    FormUsuarioComponent,
    MenuComponent,
    LoginComponent,
    ShowcaseComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
