import { Injectable } from '@angular/core';
import { Articulo } from '../Modelos/articulo';
import { ARTICULOS } from '../Modelos/mock-articulos';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor() { }

  articulos:Articulo[]=ARTICULOS

  getArticulos(){
    return this.articulos
  }

  getArticulo(id:string){
    let pos=this.articulos.findIndex(a=>a.id==id)
    return this.articulos[pos]
  }

  addArticulo(articulo:Articulo){
    this.articulos.push(articulo)
  }

  putArticulo(articulo:Articulo){
    let pos=this.articulos.findIndex(a=>a.id==articulo.id)
    this.articulos[pos]=articulo
  }

  deleteArticulo(id:string){
    let pos=this.articulos.findIndex(a=>a.id==id)
    this.articulos.splice(pos, 1)
  }

  filterPrecio(order: string, precio: number) {
    let filtrados = this.articulos.filter(a => a.precio >= precio);
    filtrados.sort((a, b) => a.precio - b.precio);
    if (order === 'asc') {
      return filtrados;
    } else {
      return filtrados.reverse();
    }
  }

  acceder() {
    let date: Date = new Date();
    let hora = date.getHours();
    if (hora >= 10) {
      return true;
    } else {
      return false;
    }
  }

}
