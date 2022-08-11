import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutenticacaoService } from '../shared/components/autenticacao/autenticacao.service';
import { UsuarioLogado } from '../shared/components/autenticacao/usuario-logado.type';
import { DevagramUsuarioApiService } from '../shared/services/devagram-usuario-api.service';
import { UsuarioDevagram } from '../shared/tipos/usuario-devagram.type';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  public usuario: any | null = null;
  private usuarioLogado?: UsuarioLogado | null;

  constructor(
    private servicoRotaAtual: ActivatedRoute,
    private servicoUsuario: DevagramUsuarioApiService,
    private servicoAutenticacao: AutenticacaoService
  ) {
    this.usuarioLogado = this.servicoAutenticacao.obterUsuarioLogado();
  }

  ngOnInit(): void {
    this.servicoRotaAtual.params.subscribe((params) => {
      let idUsuarioUrl = params['idUsuario'];
      if (idUsuarioUrl === 'pessoal') {
        idUsuarioUrl = this.usuarioLogado?.id;
      }

      this.carregarPerfilDoUsuario(idUsuarioUrl);
    });
  }

  async carregarPerfilDoUsuario(idUsuario?: string) {
    try {
      if (!idUsuario) {
        return;
      }

      this.usuario = await this.servicoUsuario.obterInformacoesDoPerfil(
        idUsuario
      );
    } catch (e: any) {
      alert(e.error?.erro || 'Erro ao carrear o perfil!');
    }
  }
}
