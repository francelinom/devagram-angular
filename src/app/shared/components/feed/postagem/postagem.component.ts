import { Component, Input, OnInit } from '@angular/core';
import { UsuarioLogado } from 'src/app/autenticacao/usuario-logado.type';
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
  constructor() {}

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
}
