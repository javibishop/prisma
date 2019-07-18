

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Marca } from '../models/marca';
import { environment } from '../../environments/environment.prod';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class MarcaHttpService {
  private url = environment.baseUrl + '';
  constructor(
    private HttpClient: HttpClient,
    private stateService: StateService
  ) {
    this.getAll();
   }

  getAll() {
    return this.HttpClient.get<Marca[]>(this.url)
    .subscribe(marcas => this.stateService.setMarcas(marcas));
  }
}
