import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService, Category } from '@redbits/products';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';


@Component({
  selector: 'admin-categories-form',
  templateUrl: './categories-form.component.html',
  styles: [
  ]
})
export class CategoriesFormComponent implements OnInit {

  form:any = FormGroup;
  isSubmitted = false;
  editMode = false;
  currentCategoryId: string | undefined;

  constructor(
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      icon: ['', Validators.required],
      color: ['#fff']
    });

    this._checkEditMode();
  }

  //method pour soumettre les inputs de notre form category
  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }

    //consommation du service create category
    const category: Category = {
      id: this.currentCategoryId,
      name: this.form.controls.name.value,
      icon: this.form.controls.icon.value,
      color: this.form.controls.color.value,
    };
    if(this.editMode){
      this._updateCategory(category)
    }else{
      this._addCategory(category)
    }

  }

  onCancel() {
    this.location.back();
  }

  private _addCategory(category: Category) {
    this.categoriesService.createCategory(category).subscribe(
      (category: Category) => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: `Category ${category.name} is created successfully!` });

      //to go back to the categoryList after confirmation
      timer(2000).toPromise().then(() => {
        this.location.back();
      })
    },
      () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Category is not created.' });
      });
  }

  private _updateCategory(category: Category) {
    this.categoriesService.updateCategory(category).subscribe(
      () => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Category is updated successfully!' });

      //to go back to the categoryList after confirmation
      timer(2000).toPromise().then(() => {
        this.location.back();
      })
    },
      () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Category is not updated.' });
      });
  }


  //To make sure that we are updating the category and not creating a new one
  private _checkEditMode() {
    this.route.params.subscribe((params) => {
      if(params['id']) {
        this.editMode = true;
        this.currentCategoryId = params['id'];
        this.categoriesService.getCategory(params['id']).subscribe(category => {
          this.form.controls.name.setValue(category.name);
          this.form.controls.icon.setValue(category.icon);
        })
      }
    })
  }
}
