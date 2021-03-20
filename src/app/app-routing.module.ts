import { InicioComponent } from './components/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';

const routes: Routes = [
  //aqui llamamos a nuestras rutas para que al pinchar podamos seleccionar a donde queremos ir
  {path: 'inicio', component:InicioComponent},
  {path: 'ciclos', component:CiclosComponent},
  {path: 'asignaturas', component:AsignaturasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
