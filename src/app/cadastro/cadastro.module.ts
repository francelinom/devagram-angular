import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { CadastroComponent } from './cadastro.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CadastroComponent],
  imports: [CommonModule, CadastroRoutingModule, SharedModule],
  exports: [CadastroComponent],
})
export class CadastroModule {}
