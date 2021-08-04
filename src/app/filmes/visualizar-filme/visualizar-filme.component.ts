import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmesService } from 'src/app/core/filmes.service';
import { Filme } from 'src/app/shared/models/filme';

@Component({
  selector: 'dio-visualizar-filme',
  templateUrl: './visualizar-filme.component.html',
  styleUrls: ['./visualizar-filme.component.scss']
})
export class VisualizarFilmesComponent implements OnInit {

  readonly semFoto: string = "https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg";

  filme: Filme;

  constructor(private ar: ActivatedRoute, private filmesService: FilmesService) { }

  ngOnInit() {
    this.visualizar(this.ar.snapshot.params['id']);
  }

  private visualizar(id: number): void {
    this.filmesService.visualizar(id).subscribe((filme: Filme) => {
      this.filme = filme;
    })
  }

}
