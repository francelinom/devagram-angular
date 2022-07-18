import { AbstractControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-publico',
  templateUrl: './input-publico.component.html',
  styleUrls: ['./input-publico.component.scss'],
})
export class InputPublicoComponent implements OnInit {
  @Input() public referenciaFormulario?: AbstractControl;
  @Input() public imagem?: string;
  @Input() public tipo?: string;
  @Input() public placeholder?: string;

  constructor() {}

  ngOnInit(): void {}

  public aoModificarCampo(event: any): void {
    this.referenciaFormulario?.setValue(event);
    this.referenciaFormulario?.markAsDirty();
  }

  public obtermensagemErro(): string {
    if (!this.referenciaFormulario?.errors) {
      return '';
    }

    if (this.referenciaFormulario?.errors['required']) {
      return 'Campo obrigatorio!';
    }

    return 'Problema no preenchimento';
  }
}
