import { Injectable } from '@angular/core';
import { UsuarioDevagram } from '../tipos/usuario-devagram.type';
import { DevagramApiService } from './devagram-api.service';

@Injectable({
  providedIn: 'root',
})
export class DevagramUsuarioApiService extends DevagramApiService {
  buscarDadosUsuario(): Promise<UsuarioDevagram> {
    return this.get('usuario');
  }
}
