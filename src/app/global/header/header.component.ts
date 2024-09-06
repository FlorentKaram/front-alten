import { Component, HostListener, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  basket : Product[] = [];
  constructor(private basketService: BasketService, private router: Router) {

  }

  ngOnInit(): void {
    this.basketService.basketObservble.subscribe((data) => {
      this.basket = data;
    });
  }

  toBasket(){
    this.router.navigate(['basket']);
  }

  @ViewChildren(MatMenuTrigger) trigger: QueryList<MatMenuTrigger> | undefined;
  @HostListener('window:scroll', [])
  scrollHandler(){
    if(this.trigger != undefined){
      this.trigger.forEach((element) => {
        element.closeMenu();
      });
    }
  }
}
