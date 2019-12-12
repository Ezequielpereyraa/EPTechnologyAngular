import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import {Products} from '../models/product'
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database'
import * as Promise from 'bluebird'

@Injectable({
  providedIn: 'root'
})


export class ProductService {

productList : AngularFireList <any>; 
selectProduct : Products = new Products();

constructor(private firebase : AngularFireDatabase ){ }

getProducts() {
  return this.productList = this.firebase.list('products')
}

insertProduct ( products : Products){
  this.productList.push(
  {
    nombre : products.nombre,
    apellido : products.apellido,
    mensaje : products.mensaje,
    puntuacionDeLaPagina : products.puntuacionDeLaPagina
  }
  ) ;
 }

 actualizarProduct (products:Products){
   this.productList.update(products.$key, {
    nombre : products.nombre,
    apellido : products.apellido,
    mensaje : products.mensaje,
    puntuacionDeLaPagina : products.puntuacionDeLaPagina
   })
 }
 eliminarProduct ($key:string){
   this.productList.remove($key)
 }
}


