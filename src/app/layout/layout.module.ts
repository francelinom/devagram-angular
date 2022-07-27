import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CabecalhoComponent],
  imports: [CommonModule, FormsModule],
  exports: [CabecalhoComponent],
})
export class LayoutModule {}
