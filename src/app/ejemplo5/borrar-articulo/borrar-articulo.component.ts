import {Component, OnInit} from '@angular/core';
import {Articulo} from "../../Modelos/articulo";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticulosService} from "../../Servicios/articulos.service";

@Component({
  selector: 'app-borrar-articulo',
  templateUrl: './borrar-articulo.component.html',
})
export class BorrarArticuloComponent implements OnInit{

  articulo!: Articulo;

  constructor(private activatedRoute: ActivatedRoute,
              private articuloService: ArticulosService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.articulo = this.articuloService.getArticulo(this.activatedRoute.snapshot.params["id"]);
  }

  delete(id: string) {
    this.articuloService.deleteArticulo(id);
    alert(`Articulo con id ${id} eliminado`);
    this.router.navigate(["/ejemplo5"]);
  }

  back() {
    this.router.navigate(["/ejemplo5"])
  }

}
