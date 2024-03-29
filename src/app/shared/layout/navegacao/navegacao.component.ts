import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemMenu } from './item-menu.type';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss'],
})
export class NavegacaoComponent implements OnInit {
  private rotaAtiva: string = 'home';
  private mapaDeRotas: ItemMenu = {
    home: {
      img: 'home',
      rotas: ['/'],
    },
    publicacao: {
      img: 'publicacao',
      rotas: ['/publicacao'],
    },
    perfil: {
      img: 'usuario',
      rotas: ['/perfil/pessoal', '/perfil/pessoal/editar'],
    },
  };
  constructor(private router: Router, private rotaAtivada: ActivatedRoute) {}

  ngOnInit(): void {
    this.rotaAtivada.url.subscribe(() => {
      this.definirRotaAtiva();
    });
  }

  public definirRotaAtiva() {
    for (const menu in this.mapaDeRotas) {
      const rotaMenu = this.mapaDeRotas[menu];
      if (rotaMenu.rotas.includes(this.router.url)) {
        this.rotaAtiva = menu;
        break;
      }
    }
  }

  public redirecionarPara(menu: string): void {
    const rotaMenu = this.mapaDeRotas[menu];
    this.router.navigateByUrl(rotaMenu.rotas[0]);
  }

  public obterImagem(menu: string): string {
    const rotaMenu = this.mapaDeRotas[menu];

    let icone = rotaMenu.img;
    if (this.rotaAtiva === menu) {
      icone = `${rotaMenu.img}Ativo`;
    }

    return `assets/imagens/${icone}.svg`;
  }
}
