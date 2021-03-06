import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { StateService } from '../services/state.service';
import { Marca } from '../models/marca';
import { ZonaPrecio } from '../models/zonaprecio';
import { Competidor } from '../models/competidor';
import { CompetidorHttpService } from '../services/competidor-http.service';
import { MarcaHttpService } from '../services/marca-http.service';
import { ZonaPrecioHttpService } from '../services/zonaprecio-http.service';

@Component({
  selector: 'app-competidor-edit',
  templateUrl: './competidor-edit.component.html',
  styleUrls: ['./competidor-edit.component.scss']
})
export class CompetidorEditComponent implements OnInit {
  marcas: Marca[];
  zonaPrecios: ZonaPrecio[];
  competidor: Competidor;
  selectFormMarcas = new FormControl('', Validators.required);
  selectFormZonaPrecio = new FormControl('', Validators.required);

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private stateService: StateService,
    private competidorService: CompetidorHttpService,
    private marcaHttpService: MarcaHttpService,
    private zonaPrecioHttpService: ZonaPrecioHttpService,
  ) { }

  ngOnInit() {

    this.stateService.marcas$.subscribe(marcas => this.marcas = marcas);
    this.stateService.zonasprecios$.subscribe(zonas => this.zonaPrecios = zonas);
    let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    
    if (id > 0)
      this.competidorService.getById(id).subscribe(competidor => this.competidor = competidor);
    else {
      this.competidor = this.inicializarCompetidor();
    }

    this.stateService.setAppTitulo('Edicion de competidor');
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
  }

  cancelarEdicion() {
    this.router.navigate(['competidores']);
  }
}
