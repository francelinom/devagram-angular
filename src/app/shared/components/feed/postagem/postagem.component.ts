import { Component, Input, OnInit } from '@angular/core';
import { UsuarioLogado } from 'src/app/shared/components/autenticacao/usuario-logado.type';
import { FeedService } from '../feed.service';
import { Postagem } from '../postagem.type';

const limiteCaracteresDescricaoPadrao = 90;

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.scss'],
})
export class PostagemComponent implements OnInit {
  @Input() postagem: Postagem = {} as Postagem;
  @Input() usuarioLogado?: UsuarioLogado | null = null;

  public quantidadeLinhasTextarea: number = 1;
  public comentarioAtual: string = '';
  public deveExibirCaixaComentario: boolean = false;
  public limiteCaracteresDescricao: number = limiteCaracteresDescricaoPadrao;
  constructor(private feedService: FeedService) {}

  ngOnInit(): void {}

  public exibirDescricaoCompleta() {
    this.limiteCaracteresDescricao = 99999999;
  }

  public obterImagemComentario() {
    const iconeBase = this.deveExibirCaixaComentario
      ? 'comentarioAtivo'
      : 'comentario';

    return `assets/imagens/${iconeBase}.svg`;
  }

  public fazerComentario() {}

  public verificarQuantidadeLinhas() {
    this.quantidadeLinhasTextarea = this.comentarioAtual.length > 0 ? 2 : 1;
  }

  public alternarExibicaoCaixaDeComentario() {
    this.deveExibirCaixaComentario = !this.deveExibirCaixaComentario;
  }

  public async manipularCurtida(): Promise<void> {
    try {
      await this.feedService.alternarCurtida(this.postagem._id);
      if (this.postagem.estaCurtido) {
        this.postagem.quantidadeCurtidas!--;
      } else {
        this.postagem.quantidadeCurtidas!++;
      }
      this.postagem.estaCurtido = !this.postagem.estaCurtido;
    } catch (e: any) {
      alert(e.error?.erro || 'Erro ao curtir/descurtir o post!');
    }
  }

  public obterImagemCurtida() {
    const iconeBase = this.postagem.estaCurtido ? 'descurtir' : 'curtir';

    return `assets/imagens/${iconeBase}.svg`;
  }
}
