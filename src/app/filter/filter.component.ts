import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent {

  orden!: string;
  precio!: number;

  constructor(private router: Router) {
  }

  buscar() {
    console.log(this.precio);
    console.log(this.orden);
    this.router.navigate(['/articulosFiltrados'],
      {queryParams: {orden: this.orden, precio: this.precio}}
    );
  }

}
