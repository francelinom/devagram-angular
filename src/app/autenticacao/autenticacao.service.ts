import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DevagramApiService } from '../shared/services/devagram-api.service';
import { DevagramUsuarioApiService } from '../shared/services/devagram-usuario-api.service';
import { CredenciaisDevagram } from './credenciais-devagram.type';
import { RespostaLoginDevagram } from './resposta-login-devagram.type';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService extends DevagramApiService {
  constructor(
    protected _http: HttpClient,
    @Inject('DEVAGRAM_URL_API') private _devagramUrlApi: string,
    private router: Router,
    private usuarioApiService: DevagramUsuarioApiService
  ) {
    super(_http, _devagramUrlApi);
  }

  async login(credenciais: CredenciaisDevagram): Promise<void> {
    const respostaLogin: RespostaLoginDevagram = await this.post(
      'login',
      credenciais
    );
    if (!respostaLogin.token) {
      throw new Error('Login inválido!');
    }

    localStorage.setItem('token', respostaLogin.token);
    localStorage.setItem('nome', respostaLogin.nome);
    localStorage.setItem('email', respostaLogin.email);

    const dadosUsuario = await this.usuarioApiService.buscarDadosUsuario();
    localStorage.setItem('id', dadosUsuario._id);

    if (dadosUsuario.avatar) {
      localStorage.setItem('avatar', dadosUsuario.avatar);
    }

    this.router.navigateByUrl('/');
  }

  estaLogado(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('nome');
    localStorage.removeItem('email');
    localStorage.removeItem('avatar');
    localStorage.removeItem('id');
    this.router.navigateByUrl('/login');
  }

  // TODO: Criar metodo extra para remover as informações do usuario logado
}
