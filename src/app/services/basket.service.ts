import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Filter } from "../models/filter.model";
import { Product } from "../models/product.model";
import { BehaviorSubject, Observable } from "rxjs";
import { MatSnackBar } from "@angular/material/snack-bar";


@Injectable()
export class BasketService{
    private _snackBar = inject(MatSnackBar);

    private basket: Product[] = [];
    private basketBehavior: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
    basketObservble = this.basketBehavior.asObservable();
    constructor(){}

    addProduct(product: Product){
        if(this.basket.some((item) => item._id === product._id)){
            this._snackBar.open("Already in basket", "close");
            return;
        }
        this.basket.push(product);
        this.basketBehavior.next(this.basket);
    }

    removeProduct(product: Product){
        this.basket = this.basket.filter((item) => item._id !== product._id);
        this.basketBehavior.next(this.basket);
    }

}