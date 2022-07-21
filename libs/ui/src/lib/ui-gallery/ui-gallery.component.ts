import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '@redbits/products';
import { Subject } from 'rxjs';



@Component({
  selector: 'ui-gallery',
  templateUrl: './ui-gallery.component.html',
  styleUrls: ['./ui-gallery.component.css']
})
export class UiGalleryComponent implements OnInit, OnDestroy {

  endSubs$: Subject<any> = new Subject();
  product!: Product;

  constructor(

  ) { }

  ngOnInit(): void {
  }

  ngOnDestroy():void {
    this.endSubs$.next('any');
    this.endSubs$.complete();
  }
}
