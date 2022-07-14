import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoComponent } from './botao/botao.component';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  declarations: [BotaoComponent, AvatarComponent],
  imports: [CommonModule],
  exports: [BotaoComponent, AvatarComponent],
})
export class SharedModule {}
