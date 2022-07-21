import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CartService } from './services/cart.service';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';
import {BadgeModule} from 'primeng/badge';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AuthGuard } from '@redbits/users';

export const ordersRoutes: Route[] = [
  {
    path: 'cart',
    component: CartPageComponent
  },
  {
    path: 'checkout',
    canActivate: [AuthGuard],
    component: CheckoutPageComponent
  },
  {
    path: 'success',
    component: ThankYouComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [CommonModule,
    BadgeModule,
    RouterModule.forChild(ordersRoutes),
    CardModule,ReactiveFormsModule
    ,InputTextModule,
    InputNumberModule,
    FormsModule,
    ButtonModule],

  declarations: [
    CartIconComponent,
    CartPageComponent,
    OrderSummaryComponent,
    CheckoutPageComponent,
    ThankYouComponent,
    AboutUsComponent
  ],
  exports: [
    CartIconComponent,
    CartPageComponent,

  ],
})
export class OrdersModule {
  constructor(
    cartService: CartService,
  ) {
    cartService.initCartLocalStorage();
  }
}
