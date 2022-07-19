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
      login: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  public obterReferencia(nomeCampo: string): AbstractControl {
    return this.form.controls[nomeCampo];
  }
}
