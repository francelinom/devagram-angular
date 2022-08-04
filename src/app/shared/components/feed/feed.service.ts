import { Injectable } from '@angular/core';
import { DevagramApiService } from '../../services/devagram-api.service';
import { RespostaApiDevagram } from '../../tipos/resposta-api-devagram.type';
import { Postagem } from './postagem.type';

@Injectable({
  providedIn: 'root',
})
export class FeedService extends DevagramApiService {
  async carregarPostagens(idUsuario?: string): Promise<Array<Postagem>> {
    return this.get('feed' + (idUsuario ? `?id=${idUsuario}` : ''));
  }

  async alternarCurtida(idPostagem: string): Promise<RespostaApiDevagram> {
    return this.put(`like?id=${idPostagem}`, {});
  }

  async adicionarComentario(
    idPostagem: string,
    comentario: string
  ): Promise<RespostaApiDevagram> {
    return this.put(`comentario?id=${idPostagem}`, {
      comentario,
    });
  }
}
