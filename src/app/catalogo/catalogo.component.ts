import { Component, OnInit } from '@angular/core';
import "firebase/database"
import * as firebase from "firebase/app";
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  lista
  carusel
  show:boolean = false;
  constructor() { }

  ngOnInit() {
    var referencias = firebase.database().ref("Productos/Producto");
    referencias.on('value',(datalist)=>{
      this.lista = datalist.val()
    });
    var imagenes = firebase.database().ref("Carusel");
    imagenes.on('value',(snapshot)=>{
      this.carusel =Object.values(snapshot.val())
    });
  }

}
