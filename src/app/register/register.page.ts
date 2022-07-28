import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  validation_messages = {
    name: [
      {type: "required", message: "El Nombre es obligatorio"},
      {type: "minlength", message: "El Nombre no es valido"}
    ], // Mensaje de validación del email

    last_name: [
      {type: "required", message: "El apellido es obligatoria"},
      {type: "minlength", message: "El apellido no es valida"}
    ], // Mensaje de validación de la contraseña

    email: [
      {type: "required", message: "El email es obligatoria"},
      {type: "pattern", message: "El email no es valida"}
    ], // Mensaje de validación de la contraseña

    password: [
      {type: "required", message: "La contraseñá es obligatoria"},
      {type: "minlength", message: "La contraseña no es valida"}
    ] // Mensaje de validación de la contraseña
}; 

  errorMessage: String;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController, 
    private storage: Storage,
    private authService: AuthenticateService
  ) { 

    this.storage.create();

    this.registerForm = this.formBuilder.group({
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ]) // Creación de validaciones del Nombre
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required
        ]) // Creación de validaciones del apellido
      ),
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

  register(registerFormValues) {
    this.authService.registerUser(registerFormValues).then(() => {
      this.navCtrl.navigateBack("/login")
    });
  }
 
  goToLogin() {
    this.navCtrl.navigateBack("/login");
  }

}
