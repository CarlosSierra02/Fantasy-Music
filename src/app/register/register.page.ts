import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from "@ionic/storage";
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
      { type: "required", message: "El nombre es necesario" },
      { type: "minLength", message: "El nombre no es valido" }
    ],

    last_name: [
      { type: "required", message: "El apellido es necesario" },
      { type: "minLength", message: "El apellido no es valido" }
    ],

    email: [
      { type: "require", message: "El email es obligatorio" },
      { type: "pattern", message: "El email no es valido" }
    ],

    password: [
      { type: "required", message: "El password es obligatorio" },
      { type: "minLength", message: "El password no es valido" }
    ]
  };

  errorMessage: any;

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
          Validators.required,
          Validators.minLength(2)
        ])
      ),
      last_name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(2)
        ])
      ),

      email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      )
    });
  }

  ngOnInit() {
  }

  register(registerFormValues) {
    this.authService.registerUser(registerFormValues).then(() => {
      this.navCtrl.navigateBack("/login")

    });

  }
  goToLogin() {
    this.navCtrl.navigateBack("/login")
  }
}
