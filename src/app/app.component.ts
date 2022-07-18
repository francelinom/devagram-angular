import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'devagram-angular';

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      imagem: [null],
      nome: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }
  public aoTrocarImagem() {
    console.log('trocou imagem');
  }

  public obterReferencia(nomeCampo: string): AbstractControl {
    return this.form.controls[nomeCampo];
  }
}
