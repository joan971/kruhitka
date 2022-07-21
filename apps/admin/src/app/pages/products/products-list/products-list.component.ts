import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '@redbits/products';
import { ConfirmationService, MessageService } from 'primeng/api';


@Component({
  selector: 'admin-products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit {

  products: any = [];



  constructor(
    private productsService: ProductsService,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this._getProducts();

  }

  private _getProducts() {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
    })
  }

  updateProduct(productid: string) {
    this.router.navigateByUrl(`/products/form/${productid}`)
  }

  //method to delete a category
  deleteProduct(productid: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this product?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.productsService.deleteProduct(productid).subscribe(() => {
          this._getProducts();
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Product is deleted successfully!'
          });
        },
          () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Product is not deleted.'
            });
          });
      },
    });
  }
}
