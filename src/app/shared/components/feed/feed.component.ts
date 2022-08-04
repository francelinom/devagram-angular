import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/shared/components/autenticacao/autenticacao.service';
import { UsuarioLogado } from 'src/app/shared/components/autenticacao/usuario-logado.type';
import { FeedService } from './feed.service';
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

  constructor(
    private servicoAutenticacao: AutenticacaoService,
    private feedService: FeedService
  ) {
    this.usuarioLogado = this.servicoAutenticacao.obterUsuarioLogado();
  }

  async ngOnInit(): Promise<void> {
    try {
      const postagensApi = await this.feedService.carregarPostagens();
      this.postagens = postagensApi.map(
        (postagem) =>
          ({
            ...postagem,
            estaCurtido: postagem.likes.includes(this.usuarioLogado?.id || ''),
            quantidadeCurtidas: postagem.likes.length,
          } as Postagem)
      );
    } catch (e: any) {
      alert(e.error?.erro || 'Erro ao carregar o feed');
    }
  }
}
