import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BotaoComponent } from './components/botao/botao.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { UploadImagemComponent } from './components/upload-imagem/upload-imagem.component';
import { InputPublicoComponent } from './components/publico/input-publico/input-publico.component';
import { FormsModule } from '@angular/forms';
import { PaginaPublicaComponent } from './components/publico/pagina-publica/pagina-publica.component';
import { RodapePaginaPublicaComponent } from './components/publico/rodape-pagina-publica/rodape-pagina-publica.component';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DevagramApiInterceptorService } from './services/devagram-api-interceptor.service';
import { FeedComponent } from './components/feed/feed.component';
import { PostagemComponent } from './components/feed/postagem/postagem.component';
import { CabecalhoComponent } from './layout/cabecalho/cabecalho.component';
import { RodapeComponent } from './layout/rodape/rodape.component';
import { NavegacaoComponent } from './layout/navegacao/navegacao.component';

@NgModule({
  providers: [
    {
      provide: 'DEVAGRAM_URL_API',
      useValue: environment.devagramUrlApi,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useValue: DevagramApiInterceptorService,
      multi: true,
    },
  ],
  declarations: [
    BotaoComponent,
    AvatarComponent,
    UploadImagemComponent,
    InputPublicoComponent,
    PaginaPublicaComponent,
    RodapePaginaPublicaComponent,
    FeedComponent,
    PostagemComponent,
    CabecalhoComponent,
    RodapeComponent,
    NavegacaoComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  exports: [
    BotaoComponent,
    AvatarComponent,
    UploadImagemComponent,
    InputPublicoComponent,
    PaginaPublicaComponent,
    RodapePaginaPublicaComponent,
    FeedComponent,
    CabecalhoComponent,
    RodapeComponent,
  ],
})
export class SharedModule {}
