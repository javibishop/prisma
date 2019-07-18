import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment.prod';
import { StateService } from './state.service';
import { ZonaPrecio } from '../models/zonaprecio';


@Injectable({
  providedIn: 'root'
})
export class ZonaPrecioHttpService {
  private url = environment.baseUrl + '';
  constructor(
    private HttpClient: HttpClient,
    private stateService: StateService
  ) {
    this.getAll();
   }

  getAll() {
    return this.HttpClient.get<ZonaPrecio[]>(this.url)
    .subscribe(zonas => this.stateService.setZonasPrecios(zonas));
  }
}
