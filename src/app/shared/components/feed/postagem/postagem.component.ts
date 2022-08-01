import { Component, Input, OnInit } from '@angular/core';
import { Postagem } from '../postagem.type';

const limiteCaracteresDescricaoPadrao = 90;

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.scss'],
})
export class PostagemComponent implements OnInit {
  @Input() postagem: Postagem = {} as Postagem;
  public limiteCaracteresDescricao: number = limiteCaracteresDescricaoPadrao;
  constructor() {}

  ngOnInit(): void {}

  public exibirDescricaoCompleta() {
    this.limiteCaracteresDescricao = 99999999;
  }
}
