import { Component } from '@angular/core';
import {Cliente} from "../Modelos/cliente";
import {ServicioHttpService} from "../Servicios/servicio-http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styles: [
  ]
})
export class AddClienteComponent {

  cliente: Cliente = {
    nombre: "",
    cargo: ""
  }
  error: boolean = false;
  errorText!: string;

  constructor(private httpService: ServicioHttpService,
              private router: Router) {
  }

  save() {
    this.httpService.postCliente(this.cliente).subscribe({
      next: datos => this.router.navigate(['/clientes']),
      error: err => {
        this.error = true;
        this.errorText = `ERROR: ${err.statusText}`
        // console.error(err.status)
      }
    });

  }

}
