import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/shared/components/autenticacao/autenticacao.service';
import { UsuarioLogado } from 'src/app/shared/components/autenticacao/usuario-logado.type';
import { Postagem } from './postagem.type';

const limiteCaracteresDescricaoPadrao = 90;

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  public usuarioLogado: UsuarioLogado | null;
  public postagens: Array<Postagem> = [];

  constructor(private servicoAutenticacao: AutenticacaoService) {
    this.usuarioLogado = this.servicoAutenticacao.obterUsuarioLogado();
  }

  ngOnInit(): void {}
}
