import { RecorrerCurso } from '../../utils/RecorrerCurso';
import { RecorrerAsignaturas } from './../../utils/RecorrerAsignaturas';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { CiclosService } from 'src/app/services/ciclos.service';

@Component({
  selector: 'app-ciclos',
  templateUrl: './ciclos.component.html',
  styleUrls: ['./ciclos.component.css']
})
export class CiclosComponent implements OnInit {

  asignaturaDam : RecorrerAsignaturas[] = [];
  asignaturasDaw : RecorrerAsignaturas[] = [];
  conocimientos : RecorrerCurso[] = [];

  desarrolloAplicaciones : string = "dam";
  desarrolloWeb : string = "daw";

  constructor(private asignaturas : AsignaturasService, private ciclos : CiclosService, private ruta : Router) { }

  ngOnInit(): void {
    this.asignaturaDam = this.asignaturas.getDamAsignaturas(this.desarrolloAplicaciones);
    this.asignaturasDaw = this.asignaturas.getDamAsignaturas(this.desarrolloWeb);
  }

  cogerInformacion(curso : number , nombre : string) {
    this.ruta.navigate(['informacion', curso, nombre])
  }

}
