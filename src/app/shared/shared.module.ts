import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BotaoComponent } from './botao/botao.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UploadImagemComponent } from './upload-imagem/upload-imagem.component';
import { InputPublicoComponent } from './publico/input-publico/input-publico.component';
import { FormsModule } from '@angular/forms';
import { PaginaPublicaComponent } from './publico/pagina-publica/pagina-publica.component';
import { RodapePaginaPublicaComponent } from './publico/rodape-pagina-publica/rodape-pagina-publica.component';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DevagramApiInterceptorService } from './services/devagram-api-interceptor.service';

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
  ],
  imports: [CommonModule, FormsModule, RouterModule, HttpClientModule],
  exports: [
    BotaoComponent,
    AvatarComponent,
    UploadImagemComponent,
    InputPublicoComponent,
    PaginaPublicaComponent,
    RodapePaginaPublicaComponent,
  ],
})
export class SharedModule {}
