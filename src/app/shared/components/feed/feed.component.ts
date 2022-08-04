import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutenticacaoService } from 'src/app/shared/components/autenticacao/autenticacao.service';
import { UsuarioLogado } from 'src/app/shared/components/autenticacao/usuario-logado.type';
import { UsuarioDevagram } from '../../tipos/usuario-devagram.type';
import { FeedService } from './feed.service';
import { Postagem } from './postagem.type';

const limiteCaracteresDescricaoPadrao = 90;

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input() usuario?: UsuarioDevagram | null;
  public usuarioLogado: UsuarioLogado | null;
  public postagens: Array<Postagem> = [];

  constructor(
    private servicoAutenticacao: AutenticacaoService,
    private servicoFeed: FeedService,
    private serviceRotaAtiva: ActivatedRoute
  ) {
    this.usuarioLogado = this.servicoAutenticacao.obterUsuarioLogado();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['usuario'].previousValue !== changes['usuario'].currentValue) {
      this.carregarPostagens();
    }
  }

  ngOnInit(): void {
    this.carregarPostagens();
  }

  async carregarPostagens() {
    try {
      let idUsuario = '';
      if (this.usuario === null) {
        return;
      } else if (this.usuario) {
        idUsuario = this.usuario._id;
      }

      const postagensApi = await this.servicoFeed.carregarPostagens(idUsuario);

      this.postagens = postagensApi.map(
        (postagem) =>
          ({
            ...postagem,
            usuario: postagem.usuario || {
              nome: this.usuario?.nome,
              avatar: this.usuario?.avatar,
            },
            estaCurtido: postagem.likes.includes(this.usuarioLogado?.id || ''),
            quantidadeCurtidas: postagem.likes.length,
          } as Postagem)
      );
    } catch (e: any) {
      alert(e.error?.erro || 'Erro ao carregar o feed!');
    }
  }
}
