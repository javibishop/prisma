import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CompetidorList, Competidor } from '../models/competidor';
import { CompetidorHttpService } from '../services/competidor-http.service';

@Component({
  selector: 'app-competidor-list',
  templateUrl: './competidor-list.component.html',
  styleUrls: ['./competidor-list.component.scss']
})
export class CompetidorListComponent implements OnInit {
  @Input() competidores: CompetidorList[];
  competidorSeleccionado: Competidor = null;
  @Output() seleccionar = new EventEmitter<Competidor>();
  @Output() seleccionarModal = new EventEmitter<Competidor>();
  columnas: string[] = ['Codigo', 'Nombre', 'Latitud', 'Marca', 'ZonaPrecio', 'Acciones'];

  constructor(private competidorService: CompetidorHttpService, private router: Router) { }

  ngOnInit() {}

seleccionarCompetidor(competidor: Competidor ){
    this.competidorSeleccionado = competidor;
    this.seleccionar.emit(competidor);
  }

  eliminarCompetidor(competidor: Competidor) {
    var result = confirm("Esta seguro de eliminar el competidor?");
    if (result) {
    this.competidorSeleccionado = competidor;
    this.competidorService.delete(competidor.id).subscribe(
      (_) => this.router.navigate(['competidores']));
    }
  }
  
}

