import { Component } from '@angular/core';
import * as firebase from "firebase/app";
import "firebase/database"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproyecto';
  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyBYIEVW50WYN2Xj4teIcnZ7A-IqXCnxczU",
      authDomain: "eptechnology-3c0d1.firebaseapp.com",
      databaseURL: "https://eptechnology-3c0d1.firebaseio.com",
      projectId: "eptechnology-3c0d1",
      storageBucket: "eptechnology-3c0d1.appspot.com",
      messagingSenderId: "206697320301",
      appId: "1:206697320301:web:b797b32641c93e245f5464",
      measurementId: "G-CP5YSKBNM9"
    }
    firebase.initializeApp(firebaseConfig);
  }
}
