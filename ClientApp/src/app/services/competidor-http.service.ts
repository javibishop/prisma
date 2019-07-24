import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Competidor, CompetidorList } from '../models/competidor';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class CompetidorHttpService {
  private url: string;
  constructor(
    private HttpClient: HttpClient,
    private stateService: StateService,
    @Inject('BASE_URL') baseUrl: string
  ) {
    this.url = baseUrl + 'api/Competidor';

    this.getAll();
   }

  getAll() {
    return this.HttpClient.get<CompetidorList[]>(this.url + '/Competidores')
    .subscribe(competidores => this.stateService.setCompetidores(competidores));
  }
   
  filterPorCodigoNombre(texto: string) : Observable<CompetidorList[]>{
    return this.HttpClient.get<CompetidorList[]>(this.url + '/Competidores')
    .pipe(
      map(competidores => competidores.filter(a => (a.nombre + a.codigo + a.marcaNombre + a.zonaPrecioNombre).toLowerCase().includes(texto.toLowerCase())))
    )
  }

  getById(id: number) : Observable<Competidor> {
    const url = `${this.url}/Competidor/?id=${id}`; 
    return this.HttpClient.get<Competidor>(url)
  }

  update(competidor: Competidor): Observable<void>{
    const url = `${this.url}/Modificar`;
    return this.HttpClient.put<void>(url, competidor)
    .pipe(tap(() =>{return this.getAll()}));
  }

  insert(competidor: Competidor): Observable<void>{
    return this.HttpClient.post<void>(this.url + '/Insertar', competidor).pipe(tap(() => { return this.getAll() }));
  }

  delete(id: number): Observable<void> {
    const url = `${this.url}/Eliminar/?id=${id}`;

    return this.HttpClient.delete<void>(url, {
      headers: new HttpHeaders({ 'content-type': 'application/json' })
    }).pipe(tap(() => { return this.getAll() }));
  }
}
