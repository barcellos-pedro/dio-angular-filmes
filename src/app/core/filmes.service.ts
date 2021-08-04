import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from '../shared/models/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private readonly url: string = "http://localhost:3000/filmes/";

  constructor(private http: HttpClient) { }

  salvar(filme: Filme): Observable<Filme> {
    return this.http.post<Filme>(this.url, filme);
  }

  listar(pagina: number, qtdPagina: number, texto: string, genero: string): Observable<Filme[]> {
    let httpParams: HttpParams = new HttpParams();
    httpParams = httpParams.set('_page', pagina.toString());
    httpParams = httpParams.set('_limit', qtdPagina.toString());
    httpParams = httpParams.set('_sort', 'id');
    httpParams = httpParams.set('_order', 'desc');
    if(texto) httpParams = httpParams.set('q', texto);
    if(genero) httpParams = httpParams.set('genero', genero);

    return this.http.get<Filme[]>(this.url, { params: httpParams });
  }
}
