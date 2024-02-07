import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServicioHttpService} from "../Servicios/servicio-http.service";
import {Cliente} from "../Modelos/cliente";

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit{

  cliente!: Cliente;
  id!: number;
  disabled: boolean = true;
  nombre!: string;
  cargo!: string;

  constructor(private activatedRoute: ActivatedRoute,
              private httpService: ServicioHttpService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.httpService.getCliente(this.id).subscribe(c => this.cliente = c);
  }

  edit() {
    this.disabled = false;
  }

  save() {
    this.httpService.putCliente(this.cliente).subscribe({
        next: datos => this.router.navigate(['/clientes']),
        error: err => console.error(err.status)
      });
  }

  volver() {
    this.router.navigate(['/clientes']);
  }

}
