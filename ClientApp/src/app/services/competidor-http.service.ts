import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { map, tap } from 'rxjs/operators';
import { Competidor, CompetidorList } from '../models/competidor';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class CompetidorHttpService {
  private url = environment.baseUrl + '';
  constructor(
    private HttpClient: HttpClient,
    private stateService: StateService
  ) {
    this.getAll();
   }

  getAll() {
    return this.HttpClient.get<CompetidorList[]>(this.url)
    .subscribe(competidores => this.stateService.setCompetidores(competidores));
  }
   
  filterPorCodigoNombre(texto: string) : Observable<CompetidorList[]>{
    return this.HttpClient.get<CompetidorList[]>(this.url)
    .pipe(
      map(competidores => competidores.filter(a => (a.nombre + a.codigo).toLowerCase().includes(texto.toLowerCase())))
    )
  }

  getById(id: number) : Observable<Competidor> {
    const url = `${this.url}/${id}`; 
    return this.HttpClient.get<Competidor>(url)
  }

  update(competidor: Competidor): Observable<void>{
    const url = `${this.url}/${competidor.id}`;
    return this.HttpClient.put<void>(url, competidor)
    .pipe(tap(() =>{return this.getAll()}));
  }

  insert(competidor: Competidor): Observable<void>{
    return this.HttpClient.post<void>(this.url, competidor);
  }
}
