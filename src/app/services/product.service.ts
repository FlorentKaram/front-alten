import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Filter } from "../models/filter.model";


@Injectable()
export class ProductService{
    baseUrl : string = "http://localhost:3000/products";
    constructor(private http: HttpClient){
    }

    getAllProducts(filter: Filter){
        return this.http.post(this.baseUrl + "/all",filter);
    }
    
}