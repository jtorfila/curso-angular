import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { UsuarioModel } from "../../models/usuario.model";
import { AuthService } from "../../services/auth.service";

import Swal from "sweetalert2";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  
  usuario: UsuarioModel = new UsuarioModel();
  recordarme = false;

  constructor(
    
    private auth: AuthService,
    private router: Router
    
  ) {}

  ngOnInit() {

    // Comprovamos si el email está guardado en localStorage
    if ( localStorage.getItem('email') ) {
      this.usuario.email = localStorage.getItem('email');
      this.recordarme = true; // Pasamos recordarme a true.
    }

  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    Swal.fire({
      allowOutsideClick: false,
      text: "Espere un momento",
      icon: "info",
    });
    // Para ver el efecto loading en vez de el boton
    Swal.showLoading();

    this.auth.login(this.usuario).subscribe(
      (resp) => {
        
        Swal.close();
        
        // Recordar usuario
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
