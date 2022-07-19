import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoComponent } from './botao/botao.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UploadImagemComponent } from './upload-imagem/upload-imagem.component';
import { InputPublicoComponent } from './publico/input-publico/input-publico.component';
import { FormsModule } from '@angular/forms';
import { PaginaPublicaComponent } from './publico/pagina-publica/pagina-publica.component';

@NgModule({
  declarations: [
    BotaoComponent,
    AvatarComponent,
    UploadImagemComponent,
    InputPublicoComponent,
    PaginaPublicaComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    BotaoComponent,
    AvatarComponent,
    UploadImagemComponent,
    InputPublicoComponent,
    PaginaPublicaComponent,
  ],
})
export class SharedModule {}
