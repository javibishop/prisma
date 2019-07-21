import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CompetidorList, Competidor } from '../models/competidor';

@Component({
  selector: 'app-competidor-list',
  templateUrl: './competidor-list.component.html',
  styleUrls: ['./competidor-list.component.css']
})
export class CompetidorListComponent implements OnInit {
  @Input() competidores: CompetidorList[];
  competidorSeleccionado: Competidor = null;
  @Output() seleccionar = new EventEmitter<Competidor> ();
  columnas: string [] = ['Codigo', 'Nombre','Latitud', 'Marca', 'ZonaPrecio'];


  constructor() { }

  ngOnInit() {
  }
seleccionarCompetidor(competidor: Competidor ){
    this.competidorSeleccionado = competidor;
    this.seleccionar.emit(competidor);
  }
}

