import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoletaComponent } from './boleta/boleta.component';
import { ParImparComponent } from './par-impar/par-impar.component';

@NgModule({
  declarations: [
    AppComponent,
    BoletaComponent,
    ParImparComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
