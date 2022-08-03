import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import { DevagramUsuarioApiService } from 'src/app/shared/services/devagram-usuario-api.service';
import { UsuarioDevagram } from 'src/app/shared/tipos/usuario-devagram.type';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {
  public termoPesquisado: string = '';
  public resultadoDaPesquisa: Array<UsuarioDevagram> = [];
  constructor(
    private router: Router,
    private devagramUsuarioApiService: DevagramUsuarioApiService,
    private autenticacaoService: AutenticacaoService
  ) {}

  ngOnInit(): void {}

  public irParaHome() {
    this.router.navigateByUrl('/');
  }

  public async pesquisarUsuario(): Promise<void> {
    this.resultadoDaPesquisa = [];
    if (this.termoPesquisado.length < 3) {
      return;
    }

    try {
      const usuariosRetornados =
        await this.devagramUsuarioApiService.pesquisarUsuarios(
          this.termoPesquisado
        );
      const usuarioLogado = this.autenticacaoService.obterUsuarioLogado();
      this.resultadoDaPesquisa = usuariosRetornados.filter(
        (ur) => ur._id !== usuarioLogado?.id
      );
    } catch (e: any) {
      if (e?.status !== 400) {
        alert(e?.error.erro || 'Erro o pesquisar usuários');
      }
    }
  }

  public irParaPerfilDoUsuario(usuario: string): void {}
}
