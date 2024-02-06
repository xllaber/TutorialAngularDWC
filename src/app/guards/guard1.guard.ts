import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {ArticulosService} from "../Servicios/articulos.service";

@Injectable({
  providedIn: 'root'
})
export class Guard1Guard implements CanActivate {

  constructor(private router: Router,
              private articulosService: ArticulosService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.articulosService.acceder()) {
      return true;
    } else {
      this.router.navigate(["/"]);
      // console.log(route.url.toString());
      return false;
    }
  }

}
