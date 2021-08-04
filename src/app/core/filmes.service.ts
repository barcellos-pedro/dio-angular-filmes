import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ConfigParams } from '../shared/models/config-params';
import { Filme } from '../shared/models/filme';
import { ConfigParamsService } from './config-params.service';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private readonly url: string = "http://localhost:3000/filmes/";

  constructor(private http: HttpClient, private configService: ConfigParamsService) { }

  salvar(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(this.url, filme);
  }

  listar(config: ConfigParams): Observable<Filme[]> {
    const configParams = this.configService.configurarParametro(config);
    return this.http.get<Filme[]>(this.url, { params: configParams });
  }

  visualizar(id: number): Observable<Filme> {
    return this.http.get<Filme>(`${this.url}${id}`);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}${id}`);
  }
}
