import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      login: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {}

  public obterReferencia(nomeCampo: string): AbstractControl {
    return this.form.controls[nomeCampo];
  }
}
