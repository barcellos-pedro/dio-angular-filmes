import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'dio-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.scss']
})
export class AlertaComponent implements OnInit {

  titulo = "Sucesso!";
  descricao = "Seu registro foi cadastrado com sucesso!";
  btnSucesso = "OK";
  btnCancelar = "Cancelar";
  corBtn = "primary";
  possuirBtnFechar = false;

  constructor(
    public dialogRef: MatDialogRef<AlertaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    if(this.data) {
      this.titulo = this.data.titulo || this.titulo;
      this.descricao = this.data.titulo || this.descricao;
      this.btnSucesso = this.data.titulo || this.btnSucesso;
      this.btnCancelar= this.data.titulo || this.btnCancelar;
      this.corBtn = this.data.titulo || this.corBtn;
      this.possuirBtnFechar = this.data.titulo || this.possuirBtnFechar;
    }
  }

}
