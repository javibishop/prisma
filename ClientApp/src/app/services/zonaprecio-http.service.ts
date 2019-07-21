import { Injectable, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment.prod';
import { StateService } from './state.service';
import { ZonaPrecio } from '../models/zonaprecio';


@Injectable({
  providedIn: 'root'
})
export class ZonaPrecioHttpService {
  private url: string;
  constructor(
    private HttpClient: HttpClient,
    private stateService: StateService,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.url = baseUrl + 'api/ZonaPrecio';
    this.getAll();
   }

  getAll() {
    return this.HttpClient.get<ZonaPrecio[]>(this.url + '/ZonaPrecios')
    .subscribe(zonas => this.stateService.setZonasPrecios(zonas));
  }
}
