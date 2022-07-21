import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart, CartService, Order, OrderItem, OrdersService } from '@redbits/orders';
import { UsersService } from '@redbits/users';
import { Subject, takeUntil } from 'rxjs';
import { StripeService } from 'ngx-stripe';



@Component({
  selector: 'orders-checkout-page',
  templateUrl: './checkout-page.component.html',
  styles: [
  ]
})
export class CheckoutPageComponent implements OnInit, OnDestroy {

  checkoutFormGroup: FormGroup;
  isSubmitted = false;
  editmode = false;
  orderItems: OrderItem[] = [];
  //userId = "61fe6037d36f787dd15de18d";
  userId: string;
  currentUserId: string | undefined;
  unsubscribe$: Subject<any> = new Subject();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private cartService: CartService,
    private stripeService: StripeService,
    private ordersService: OrdersService
  ) { }

  ngOnInit(): void {
    this._initCheckoutForm();
    this._getCartItems();
    this._autoFillUserData();
  }

  ngOnDestroy() {
    this.unsubscribe$.next('any');
    this.unsubscribe$.complete();
  }


  private _initCheckoutForm() {
    this.checkoutFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      street: ['', Validators.required],
      apartment: [''],
      zip: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required]
    });
  }

  private _autoFillUserData() {
    this.usersService.observeCurrentUser().pipe(takeUntil(this.unsubscribe$)).subscribe((user) => {
      if (user) {
        this.userId = user.id;
        this.checkoutForm.name.setValue(user.name);
        this.checkoutForm.email.setValue(user.email);
        this.checkoutForm.phone.setValue(user.phone);
        this.checkoutForm.city.setValue(user.city);
        this.checkoutForm.street.setValue(user.street);
        this.checkoutForm.country.setValue(user.country);
        this.checkoutForm.zip.setValue(user.zip);
        this.checkoutForm.apartment.setValue(user.apartment);
      }

    })
  }

  private _getCartItems() {
    const cart: Cart = this.cartService.getCart();
    this.orderItems = cart.items.map(item => {
      return {
        product: item.productId,
        quantity: item.quantity,
      }
    });

  }

  get checkoutForm() {
    return this.checkoutFormGroup.controls
  }

  backToCart() {
    this.router.navigate(['/cart'])
  }

  placeOrder() {
    this.isSubmitted = true;
    if (this.checkoutFormGroup.invalid) {
      return;
    }

    const order: Order = {
      orderItems: this.orderItems,
      shippingAddress1: this.checkoutForm.street.value,
      shippingAddress2: this.checkoutForm.apartment.value,
      city: this.checkoutForm.city.value,
      zip: this.checkoutForm.zip.value,
      country: this.checkoutForm.country.value,
      phone: this.checkoutForm.phone.value,
      status: 0,
      user: this.userId,
      dateOrdered: `${Date.now()}`
    };

    this.ordersService.cacheOrderData(order);

    this.ordersService.createCheckoutSession(this.orderItems).subscribe((error) => {
      if (error) {
        console.log('Error in redirect to payment');
      }
    })

  }
}
