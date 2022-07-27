import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CabecalhoComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [CabecalhoComponent],
})
export class LayoutModule {}
