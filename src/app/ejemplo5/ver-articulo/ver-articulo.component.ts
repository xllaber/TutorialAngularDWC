import {Component, OnInit} from '@angular/core';
import {Articulo} from "../../Modelos/articulo";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticulosService} from "../../Servicios/articulos.service";

@Component({
  selector: 'app-ver-articulo',
  templateUrl: './ver-articulo.component.html',
  styles: [
  ]
})
export class VerArticuloComponent implements OnInit{

  articulo!: Articulo;
  id!: string;
  nombre!: string;
  descripcion!: string;
  precio!: number;
  disabled: boolean = true;

  constructor(private activatedRoute: ActivatedRoute,
              private articuloService: ArticulosService,
              private router: Router) {
    this.activatedRoute.params
      .subscribe(params => this.articulo = this.articuloService.getArticulo(params["id"]));
  }

  ngOnInit(): void {
    this.id = this.articulo.id;
    this.nombre = this.articulo.nombre;
    this.descripcion = this.articulo.descripcion;
    this.precio = this.articulo.precio;
  }

  modify() {
    this.disabled = false;
  }

  back(){
    this.router.navigate(["/ejemplo5"]);
  }

  save() {
    let articuloModificado: Articulo = {
      id: this.id,
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: this.precio
    };
    this.articuloService.putArticulo(articuloModificado);
    this.disabled = true;
    this.router.navigate(["/ejemplo5"]);
  }

}
