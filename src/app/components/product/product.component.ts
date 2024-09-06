import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  @Input() product!: Product;
  @Output() addToBasket : EventEmitter<Product> = new EventEmitter();
  constructor(){}
  ngOnInit(): void {
  }

  onAddToBasket(){
    this.addToBasket.emit(this.product);
  }
}
