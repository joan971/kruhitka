import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService, Category } from '@redbits/products';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';


@Component({
  selector: 'admin-categories-list',
  templateUrl: './categories-list.component.html',
  styles: [
  ]
})
export class CategoriesListComponent implements OnInit, OnDestroy{

  categories: Category[] = [];
  endSubs$: Subject<any> = new Subject();

  constructor(
    private categoriesService: CategoriesService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._getCategory();
  }

  ngOnDestroy() {
    
    this.endSubs$.complete();
  }

  //method to delete a category
  deleteCategory(categoryId: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this category?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categoriesService.deleteCategory(categoryId).subscribe(() => {
          this._getCategory();
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Category is deleted successfully!'
          });
        },
          () => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Category is not deleted.'
            });
          });
      },
    });
  }

  //update category
  updateCategory(categoryid: string) {
    this.router.navigateByUrl(`categories/form/${categoryid}`);
  }
  //to have the auto refresh after delete category
  private _getCategory() {
    this.categoriesService.getCategories().pipe(takeUntil(this.endSubs$)).subscribe((cats) => {
      this.categories = cats;
    })
  }
}
