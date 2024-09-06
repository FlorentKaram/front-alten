import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { BasketComponent } from './pages/basket/basket.component';

const routes: Routes = [
  {
    path: '',
    component: ProductlistComponent
  },
  {
    path: 'basket',
    component: BasketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
