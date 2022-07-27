import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { 
    this.storage.create();
  }

  loginUser(credentials) {
    return new Promise((accept, reject) => { // Promesa
     this.storage.get("user").then((data)=>{
       if (
         credentials.email == data.email && // Comparación con los datos almacenados
         credentials.password == atob(data.password)
      ){
          accept("Login Exitoso");
        } else {
          reject("Login Fallido");
        }
      }).catch( err => {
        return reject("Falllo en el login")
    });
  });
}


  registerUser(userData) {
    userData.password = btoa(userData.password); // Uso de btoa que es para encriptar
    atob(userData.password) // Uso de atob que es para desencriptar 
    return this.storage.set("user",userData)
  }
}
