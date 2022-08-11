import { Injectable } from '@angular/core';
import { RespostaApiDevagram } from '../shared/tipos/resposta-api-devagram.type';

@Injectable({
  providedIn: 'root',
})
export class PublicacaoService {
  constructor() {}

  public publicar(dadosPublicacao: FormData): Promise<RespostaApiDevagram> {
    return this.post('publicacao', dadosPublicacao);
  }
}
