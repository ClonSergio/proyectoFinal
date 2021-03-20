import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { Component, OnInit } from '@angular/core';
import { RecorrerAsignaturas } from 'src/app/utils/RecorrerAsignaturas';


@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  conocimientos: RecorrerAsignaturas[] = [];
  count:number = 0;

  constructor(private key: AsignaturasService) { }

  ngOnInit(): void {
    this.conocimientos = this.key.getAllAsignaturas();
    this.count = this.conocimientos.length;
  }

  recorrerDatos(nombre:string){
      this.conocimientos = this.key.getDamAsignaturas(nombre);
      this.count = this.conocimientos.length;
  }


}
