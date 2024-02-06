import { Component } from '@angular/core';
import {Articulo} from "../../Modelos/articulo";
import {ArticulosService} from "../../Servicios/articulos.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-articulo',
  templateUrl: './add-articulo.component.html',
  styleUrls: ['./add-articulo.component.css']
})
export class AddArticuloComponent {

  id!: string;
  nombre!: string
  descripcion!: string;
  precio!: number
  duplicado: boolean = false;

  constructor(private articuloService: ArticulosService,
              private router: Router) {}

  save() {
    let existente = this.articuloService.getArticulo(this.id);
    if(existente) {
      this.duplicado = true;
    } else {
      let articulo: Articulo = {
        id: this.id,
        nombre: this.nombre,
        descripcion: this.descripcion,
        precio: this.precio
      }
      this.articuloService.addArticulo(articulo);
      this.router.navigate(["/ejemplo5"]);
    }
  }

  cancel() {
    // this.newArticulo = null;
    this.router.navigate(["/ejemplo5"]);
  }

}
