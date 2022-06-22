import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { CurriculumComponent } from "./curriculum/curriculum.component";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import { InicioComponent } from "./inicio/inicio.component";
import { PerfilGamerComponent } from "./perfil-gamer/perfil-gamer.component";
import { PortafolioComponent } from "./portafolio/portafolio.component";

const routes: Routes = [

  {
    path: "",
    component: InicioComponent
  },
  {
    path: 'portal/cv',
    component: CurriculumComponent
  },
  {
    path: 'portal/perfil-gamer',
    component: PerfilGamerComponent
  },
  {
    path: "portal/portafolio",
    component: PortafolioComponent
  },
  {
    path: '**',
    component: EmptyRouteComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
})
export class AppRoutingModule { }