

import { Injectable, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Marca } from '../models/marca';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class MarcaHttpService {
  private url: string;
  constructor(
    private HttpClient: HttpClient,
    private stateService: StateService,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.url = baseUrl + 'api/Marca';
    this.getAll();
   }

  getAll() {
    return this.HttpClient.get<Marca[]>(this.url + '/Marcas')
    .subscribe(marcas => this.stateService.setMarcas(marcas));
  }
}
