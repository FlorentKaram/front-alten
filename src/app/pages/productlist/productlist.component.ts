import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Filter } from 'src/app/models/filter.model';
import { Product } from 'src/app/models/product.model';
import { BasketService } from 'src/app/services/basket.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent {
  filter : Filter = {
    name: "",
    productPerPage: 6,
    currentPage: 0
  }
  private _snackBar = inject(MatSnackBar);

  formName: FormControl = new FormControl("");
  numberOfProduct : number = 0;
  products : Product[] = [];

  constructor(private productService: ProductService, private basketService: BasketService) {}

  ngOnInit(){

    this.productService.getAllProducts(this.filter).subscribe((data: any) => {
      this.products = data.products;
      this.numberOfProduct = data.numberOfProduct;
    },
    (error) => {
      this._snackBar.open("No result found", "close");

    });
  }

  onAddToBasket(product: Product){
    this.basketService.addProduct(product);
  }

  previous(){
    this.filter.currentPage-=1;
    this.ngOnInit();
  }

  next(){
    this.filter.currentPage+=1;
    this.ngOnInit()
  }

  numberOfPage(): number{
    return Math.ceil(this.numberOfProduct/this.filter.productPerPage)
  }

  clear(){
    this.formName.setValue("");
    this.filter.name = "";
    this.ngOnInit();
  }

  search(){
    this.filter.name = this.formName.value;
    this.ngOnInit();
  }
}
