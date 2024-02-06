import { Component } from '@angular/core';
import {Articulo} from "../Modelos/articulo";
import {ArticulosService} from "../Servicios/articulos.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-articlulos-filter',
  templateUrl: './articlulos-filter.component.html',
})
export class ArticlulosFilterComponent {

  articulos!:Articulo[]

  constructor(private servicioArticulos:ArticulosService,
              private router: Router,
              private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    let precio!: number;
    let orden!: string;
    this.activatedRoute.queryParams.subscribe(params => {
      precio = params['precio'];
      orden = params['orden'];
      this.articulos = this.servicioArticulos.filterPrecio(orden, precio);
    })
  }

  articuloSeleccionado!:Articulo | null

  id !:string
  nombre!:string
  descripcion !:string
  precio !:number

  ver(id:string){
    this.router.navigate(["/articulo", id]);
  }

  addArticulo() {
    this.router.navigate(["/add"])
  }

  borrar(id:string){
    this.router.navigate(["/borrar", id]);
  }

  modificar(){
    if (this.articuloSeleccionado !=null){
      let articuloModificado:Articulo={
        id:this.id,
        nombre:this.nombre,
        descripcion:this.descripcion,
        precio:this.precio
      }
      this.servicioArticulos.putArticulo(articuloModificado)
    }
    this.articuloSeleccionado=null
  }

  cancelar(){
    this.articuloSeleccionado=null
  }


}
