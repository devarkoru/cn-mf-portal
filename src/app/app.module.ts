import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialExampleModule} from '../material.module';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonasComponent } from './personas/personas.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { InfiniteTypeDeleteModule } from "ngx-sbz-type-delete";
import { CurriculumComponent } from './curriculum/curriculum.component';
import { PerfilGamerComponent } from './perfil-gamer/perfil-gamer.component';
import { InicioComponent } from './inicio/inicio.component';
import { InfoCvComponent } from './curriculum/info-cv/info-cv.component';
import { PortafolioComponent } from './portafolio/portafolio.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    PersonasComponent,
    CurriculumComponent,
    PerfilGamerComponent,
    InicioComponent,
    InfoCvComponent,
    PortafolioComponent,
    
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialExampleModule,
    HttpClientModule,
    CarouselModule,
    InfiniteTypeDeleteModule,    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
