import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { StateService } from '../services/state.service';
import { CompetidorList } from '../models/competidor';
import { CompetidorHttpService } from '../services/competidor-http.service';
import { CompetidorEditModalComponent } from '../competidor-edit-modal/competidor-edit-modal.component';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-competidor-manager',
  templateUrl: './competidor-manager.component.html',
  styleUrls: ['./competidor-manager.component.scss']
})
export class CompetidorManagerComponent implements OnInit {

   competidores: CompetidorList [];
   competidorSeleccionado: CompetidorList;
   private modalForm = environment.modalForm === true;
   constructor(
     private router: Router,
     private stateService: StateService,
     private competidorService: CompetidorHttpService,
     private dialog: MatDialog
   ) { }
 
  ngOnInit() {
    this.stateService.competidores$.subscribe(competidores => this.competidores = competidores);
     this.stateService.setAppTitulo('Administracion de Competidores');
   }
 
   filtrarCompetidor(filtro: string) {
     this.competidorService.filterPorCodigoNombre(filtro).subscribe(competidores => this.competidores = competidores);
   }
 
  seleccionarCompetidor(competidor: CompetidorList) {
    if (this.modalForm) {
      const dialogRef = this.dialog.open(CompetidorEditModalComponent, {
        width: '650px',
        data: { id: competidor.id }
      });
    } else {
      this.router.navigate(['competidores', competidor.id.toString()]);
    }
   }

  cancelarEdicion() {
     this.competidorSeleccionado = null;
   }
 
  nuevoCompetidor() {
    if (this.modalForm) {
      const dialogRef = this.dialog.open(CompetidorEditModalComponent, {
        width: '650px',
        data: { id: 0 }
      });
    } else {
      this.router.navigate(['competidores', 0]);
    }
  }

  eliminarCompetidor(competidor: CompetidorList) {
    this.competidorService.delete(competidor.id).subscribe(
      (_) => this.router.navigate(['competidores']));
  }
}
