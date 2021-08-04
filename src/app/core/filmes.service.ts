import { HttpClient } from '@angular/common/http';
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

  listar(): Observable<Filme[]> {
    return this.http.get<Filme[]>(this.url);
  }
}
