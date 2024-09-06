import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit{
  basket: Product[] = [];
  constructor(private basketService: BasketService, private router: Router) {}

  ngOnInit(){
    this.basketService.basketObservble.subscribe((data: any) => {
      this.basket = data;
    });
  }

  onRemoveFromBasket(product: Product){
    this.basketService.removeProduct(product);
  }

  goToShop(){
    this.router.navigate(['/']);
  }
}
