import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavegacaoComponent } from './navegacao/navegacao.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [NavegacaoComponent, RodapeComponent],
  imports: [CommonModule, FormsModule],
  exports: [RodapeComponent],
})
export class LayoutModule {}
