import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import {Productos} from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  Carousle;
  Productos: Observable<Productos[]>;

  constructor(public db: AngularFirestore) { 
    this.Productos = this.db.Producto()
  }
}
