import {Component, OnInit} from '@angular/core';
import {ServicioHttpService} from "../Servicios/servicio-http.service";
import {Cliente} from "../Modelos/cliente";
import {Router} from "@angular/router";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{

  clientes!: Cliente[];
  cliente!: Cliente;

  constructor(private httpService: ServicioHttpService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.httpService.getClientes().subscribe(c => this.clientes = c);
  }

  ver(id: number | undefined) {
    if (id) {
      this.router.navigate(['/clientes', id]);
    }
  }

}
