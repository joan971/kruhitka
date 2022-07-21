import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category, Product } from '@redbits/products';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styles: [
  ]
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];
  isCategoryPage!: boolean;


  constructor(private prodService: ProductsService,
    private catService: CategoriesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      params['categoryid'] ? this._getProducts([params['categoryid']]) : this._getProducts();
      params['categoryid'] ? (this.isCategoryPage = true) : (this.isCategoryPage = false);
    })

    this._getCategories();
  }

  private _getProducts(categoriesFilter?: string[]) {
    this.prodService.getProducts(categoriesFilter).subscribe((product) => {
      this.products = product;
    })
  }

  private _getCategories() {
    this.catService.getCategories().subscribe((category) => {
      this.categories = category;
    })
  }

  categoryFilter() {
    const selectedCategories = this.categories.filter((category) => category.checked).map((category) => category.id)

    this._getProducts(selectedCategories);
  }
}
