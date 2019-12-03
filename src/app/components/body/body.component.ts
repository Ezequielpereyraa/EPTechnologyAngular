import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase/app";
import "firebase/database"

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styles: []
})
export class BodyComponent implements OnInit {
  lista
  carusel
  constructor (){
 
  }

  ngOnInit() {
    var referencias = firebase.database().ref("Productos/Producto");
    referencias.on('value',(datalist)=>{
      this.lista = datalist.val()
    });
    var imagenes = firebase.database().ref("Caurusel");
    imagenes.on('value',(datalist)=>{
      this.carusel =Object.values (datalist.val())
    });
  }

}
