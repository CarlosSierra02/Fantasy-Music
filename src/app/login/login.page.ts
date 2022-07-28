import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authenticate.service';
import { Storage } from "@ionic/storage";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  validation_messages = {
    email: [
      {type: "required", message: "El email es obligatorio"},
      {type: "pattern", message: "El email no es valido"}
    ], // Mensaje de validación del email

    password: [
      {type: "required", message: "La contraseña es obligatoria"},
      {type: "minlength", message: "La contraseña no es valida"}
    ] // Mensaje de validación de la contraseña
  }; 

  errorMessage: String;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage
    ) { 

    this.storage.create();

    this.loginForm = this.formBuilder.group({
      
      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+$")
        ]) // Creación de validaciones del email
      ),
      password: new FormControl(
      "",
      Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]) // Creación de validaciones de la contraseñá
      )
    })
  }

  ngOnInit() {
  }

  loginUser(credentials) {
    this.authService.loginUser(credentials).then( res => {
      this.errorMessage = "";
      this.storage.set("isUserLoggedIn", true)
      this.navCtrl.navigateForward("/home");
    }).catch( err => {
      this.errorMessage = err;
    })
  }

    goToRegister() {
    this.navCtrl.navigateForward("/register");
    } 

}
