import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { FilmesService } from 'src/app/core/filmes.service';
import { Alerta } from 'src/app/shared/models/alerta';
import { Filme } from 'src/app/shared/models/filme';
import { AlertaComponent } from 'src/app/shared/components/alerta/alerta.component';

@Component({
  selector: 'dio-visualizar-filme',
  templateUrl: './visualizar-filme.component.html',
  styleUrls: ['./visualizar-filme.component.scss']
})
export class VisualizarFilmesComponent implements OnInit {

  readonly semFoto: string = "https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg";
  filme: Filme;
  id: number;

  constructor(
    public dialog: MatDialog,
    private ar: ActivatedRoute,
    private filmesService: FilmesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.ar.snapshot.params['id'];
    this.visualizar();
  }

  editar(): void {
    this.router.navigateByUrl(`/filmes/cadastro/${this.id}`);
  }

  excluir(): void {
    const config = {
      data: {
        titulo: 'Você tem certeza que deseja excluir?',
        descricao: 'Caso você tenha certeza, clique no botão OK',
        corBtnSucesso: 'warn',
        corBtnCancelar: 'secondary',
        possuirBtnFechar: true
      } as Alerta
    }
    const dialogRef = this.dialog.open(AlertaComponent, config);
    dialogRef.afterClosed()
      .subscribe((opcao: boolean) => opcao ?
       this.filmesService.excluir(this.id).subscribe(() => this.router.navigateByUrl('/filmes')) : null);
  }

  private visualizar(): void {
    this.filmesService.visualizar(this.id).subscribe((filme: Filme) => {
      this.filme = filme;
    })
  }

}
