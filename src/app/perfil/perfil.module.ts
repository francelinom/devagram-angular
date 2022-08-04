import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './perfil.component';
import { SharedModule } from '../shared/shared.module';
import { CabecalhoPerfilComponent } from './cabecalho-perfil/cabecalho-perfil.component';

@NgModule({
  declarations: [PerfilComponent, CabecalhoPerfilComponent],
  imports: [CommonModule, PerfilRoutingModule, SharedModule],
})
export class PerfilModule {}
