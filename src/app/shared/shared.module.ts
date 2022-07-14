import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoComponent } from './botao/botao.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UploadImagemComponent } from './upload-imagem/upload-imagem.component';

@NgModule({
  declarations: [BotaoComponent, AvatarComponent, UploadImagemComponent],
  imports: [CommonModule],
  exports: [BotaoComponent, AvatarComponent, UploadImagemComponent],
})
export class SharedModule {}
