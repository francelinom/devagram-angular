import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';
import { confirmacaoSenha } from '../shared/validadores/confirmacao-senha.validator';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private servicoCadastro: CadastroService,
    private autenticacaoService: AutenticacaoService
  ) {
    this.form = this.fb.group({
      file: [null],
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(4)]],
      confirmacaoSenha: ['', [Validators.required, confirmacaoSenha()]],
    });
  }

  ngOnInit(): void {}

  public obterReferencia(nomeCampo: string): AbstractControl {
    return this.form.controls[nomeCampo];
  }

  public async aoSubmeter() {
    if (this.form.invalid) {
      alert('Preencha todos os campos corretamente!');
      return;
    }

    try {
      const valoresDoFormulario = this.form.value;
      const corpoDaRequisicao = new FormData();
      corpoDaRequisicao.append('nome', valoresDoFormulario.nome);
      corpoDaRequisicao.append('email', valoresDoFormulario.email);
      corpoDaRequisicao.append('senha', valoresDoFormulario.senha);
      console.log(this.form.value);

      if (valoresDoFormulario.file) {
        corpoDaRequisicao.append('file', valoresDoFormulario.file);
      }

      await this.servicoCadastro.cadastrar(corpoDaRequisicao);
      await this.autenticacaoService.login({
        login: valoresDoFormulario.email,
        senha: valoresDoFormulario.senha,
      });
    } catch (excecao: any) {
      const mensagemErro =
        excecao?.error?.erro || 'Erro ao realizar o cadastro!';
      alert(mensagemErro);
    }
  }
}
