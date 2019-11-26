import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import {Products} from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  ProductsCollection;
  Products: Observable<Products[]>;

  constructor(public db: AngularFirestore) { 
    this.Products = this.db.collection('Products').valueChanges();
  }

  getProducts(){
    return this.Products
  }

}
