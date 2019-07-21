import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../services/state.service';
import { CompetidorList } from '../models/competidor';
import { CompetidorHttpService } from '../services/competidor-http.service';

@Component({
  selector: 'app-competidor-manager',
  templateUrl: './competidor-manager.component.html',
  styleUrls: ['./competidor-manager.component.css']
})
export class CompetidorManagerComponent implements OnInit {

   competidores: CompetidorList [];
   competidorSeleccionado: CompetidorList;
 
   constructor(
     private router: Router,
     private stateService: StateService,
     private competidorService: CompetidorHttpService
   ) { }
 
   ngOnInit() {
     this.stateService.setAppTitulo('Administracion de Competidores');
   }
 
   filtrarCompetidor(filtro: string) {
     this.competidorService.filterPorCodigoNombre(filtro).subscribe(competidores => this.competidores = competidores);
   }
 
   seleccionarCompetidor(competidor: CompetidorList) {
     this.router.navigate(['competidores', competidor.id.toString()]);
   }
 
   cancelarEdicion() {
     this.competidorSeleccionado = null;
   }
 
   nuevoCompetidor(){
     this.router.navigate(['competidores', 0]);
   }
}
