import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoService } from './autenticacao.service';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoGuard implements CanActivate {
  constructor(
    private serviceAutenticacao: AutenticacaoService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (this.serviceAutenticacao.estadoLogado()) {
      return true;
    }
    return this.router.parseUrl('login');
  }
}
