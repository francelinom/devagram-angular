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

    if (this.referenciaFormulario?.errors['email']) {
      return 'Inserir um e-mail válido!';
    }

    if (this.referenciaFormulario?.errors['minlength']) {
      return `Deve ter no mínimo ${this.referenciaFormulario.errors['minlength'].requiredLength} caracteres!`;
    }

    if (this.referenciaFormulario?.errors['confirmacaoSenha']) {
      return `As senhas não conferem!`;
    }

    return 'Problema no preenchimento';
  }
}
