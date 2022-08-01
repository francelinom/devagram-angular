import { Component, OnInit } from '@angular/core';
import { Postagem } from './postagem.type';

const limiteCaracteresDescricaoPadrao = 90;

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  public limiteCaracteresDescricao: number = limiteCaracteresDescricaoPadrao;
  public postagens: Array<Postagem> = [];

  constructor() {}

  ngOnInit(): void {}

  public exibirDescricaoCompleta() {
    this.limiteCaracteresDescricao = 99999999;
  }
}
