import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { StateService } from '../services/state.service';
import { Marca } from '../models/marca';
import { ZonaPrecio } from '../models/zonaprecio';
import { Competidor } from '../models/competidor';
import { CompetidorHttpService } from '../services/competidor-http.service';
import { MarcaHttpService } from '../services/marca-http.service';
import { ZonaPrecioHttpService } from '../services/zonaprecio-http.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-competidor-edit',
  templateUrl: './competidor-edit-modal.component.html',
  styleUrls: ['./competidor-edit-modal.component.scss']
})
export class CompetidorEditModalComponent implements OnInit {
  marcas: Marca[];
  zonaPrecios: ZonaPrecio[];
  competidor: Competidor;
  selectFormMarcas = new FormControl('', Validators.required);
  selectFormZonaPrecio = new FormControl('', Validators.required);

  constructor(
    public dialogRef: MatDialogRef<CompetidorEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
    private stateService: StateService,
    private competidorService: CompetidorHttpService,
    private marcaHttpService: MarcaHttpService,
    private zonaPrecioHttpService: ZonaPrecioHttpService
  ) { }

  ngOnInit() {
    this.stateService.marcas$.subscribe(marcas => this.marcas = marcas);
    this.stateService.zonasprecios$.subscribe(zonas => this.zonaPrecios = zonas);

    const id = Number(this.data.id);
    if (id > 0)
      this.competidorService.getById(id).subscribe(competidor => this.competidor = competidor);
    else {
      this.competidor = this.inicializarCompetidor();
    }
  }

  inicializarCompetidor(): Competidor {
    return new Competidor(0, '', '', '', 0, 0, false, false, null, null);
  }

  guardar(form: any) {

    if (this.competidor.id > 0) {
      this.competidorService.update(this.competidor).subscribe(
        (_) => this.router.navigate(['competidores'])
      ); 
    } else {
      this.competidorService.insert(this.competidor).subscribe(
        (_) => this.router.navigate(['competidores'])
      ); 
    }
    this.dialogRef.close();
  }

  cancelarEdicion() {
    this.dialogRef.close();
    this.router.navigate(['competidores']);
  }
}
