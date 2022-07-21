import { Component, OnInit } from '@angular/core';
import { CartService } from '@redbits/orders';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'eshop-messages',
  templateUrl: './messages.component.html',
})
export class MessagesComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Cart Updated!'
      });
    });
  }

}
