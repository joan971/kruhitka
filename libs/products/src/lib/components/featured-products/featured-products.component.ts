import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '@redbits/products';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'products-featured-products',
  templateUrl: './featured-products.component.html',
  styles: [
  ]
})
export class FeaturedProductsComponent implements OnInit, OnDestroy {

  products: Product[] = [];
  endSubs$: Subject<any> = new Subject();

  constructor(private prodService: ProductsService) { }


  ngOnDestroy(): void {
    this.endSubs$.next;
    this.endSubs$.complete;
  }

  ngOnInit(): void {
    this._getFeaturedProducts();
  }

  private _getFeaturedProducts() {
    this.prodService.getFeaturedProducts(4).pipe(takeUntil(this.endSubs$)).subscribe((products) => {
      this.products = products;
    })
  }
}
