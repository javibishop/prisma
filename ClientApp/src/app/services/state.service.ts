import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { Marca } from '../models/marca';
import { CompetidorList } from '../models/competidor';
import { ZonaPrecio } from '../models/zonaprecio';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public appTitulo$ = new BehaviorSubject<string>('');
  public marcas$ = new BehaviorSubject<Marca[]>([]);
  public competidores$ = new BehaviorSubject<CompetidorList[]>([]);
  public zonasprecios$ = new BehaviorSubject<ZonaPrecio[]>([]);
  constructor() { }

  setAppTitulo(titulo: string){
    this.appTitulo$.next(titulo);
  }

  setMarcas(marcas: Marca[]){
    this.marcas$.next(marcas);
  }

  setCompetidores(competidores: CompetidorList[]){
    this.competidores$.next(competidores);
  }

  setZonasPrecios(zonasPrecios: ZonaPrecio[]){
    this.zonasprecios$.next(zonasPrecios);
  }
}
