import { Component } from '@angular/core';
import { ArticulosService } from '../Servicios/articulos.service';
import { Articulo } from '../Modelos/articulo';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ejemplo5',
  templateUrl: './ejemplo5.component.html',
  styleUrls: ['./ejemplo5.component.css']
})
export class Ejemplo5Component {

  articulos!:Articulo[]

  constructor(private servicioArticulos:ArticulosService,
              private router: Router
  ){}

  ngOnInit(){
    this.articulos=this.servicioArticulos.getArticulos()
  }

    articuloSeleccionado!:Articulo | null

    id !:string
    nombre!:string
    descripcion !:string
    precio !:number

     ver(id:string){
       // this.articuloSeleccionado=this.servicioArticulos.getArticulo(id)
       //
       // this.id=this.articuloSeleccionado.id
       // this.nombre=this.articuloSeleccionado.nombre
       // this.descripcion=this.articuloSeleccionado.descripcion
       // this.precio=this.articuloSeleccionado.precio
       this.router.navigate(["/articulo", id]);
     }

     addArticulo() {
        this.router.navigate(["/add"])
     }

     borrar(id:string){
       // this.servicioArticulos.deleteArticulo(id)
       // this.articuloSeleccionado = null;
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
