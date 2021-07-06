import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { UsuarioModel } from "../../models/usuario.model";
import { AuthService } from "../../services/auth.service";

import Swal from "sweetalert2";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"],
})
export class RegistroComponent implements OnInit {
  
  usuario: UsuarioModel;
  recordarme = false;

  constructor(
  
    private auth: AuthService, 
    private router: Router
  
  ) {}

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  onSubmit(form: NgForm) {
    
    if (form.invalid) { return; }

    Swal.fire({
      allowOutsideClick: false,
      text: "Espere un momento",
      icon: "info",
    });
    // Para ver el efecto loading en vez de el boton
    Swal.showLoading();

    this.auth.nuevoUsuario(this.usuario).subscribe(
      (resp) => {
        Swal.close();

        if ( this.recordarme ) {
          localStorage.setItem('email', this.usuario.email);
        }

        this.router.navigateByUrl('/home');
      },
      (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          title: "Error al autenticar",
          text: err.error.error.message,
          icon: "error",
        });
      }
    );
  }
}
