import { CategoriesService, Product, ProductsService } from '@redbits/products';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'admin-products-form',
  templateUrl: './products-form.component.html',
  styles: [
  ]
})
export class ProductsFormComponent implements OnInit {

  editmode = false;
  form: any = FormGroup;
  isSubmitted = false;
  categories: any = [];
  imageDisplay: string | ArrayBuffer | undefined;
  currentProductId!: string;

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private messageService: MessageService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._initForm();
    this._getCategories();
    this._checkEditMode();

  }

  private _initForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      brand: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      countInStock: ['', Validators.required],
      description: ['',],
      richDescription: [],
      image: ['', Validators.required],
      isFeatured: [false]
    });
  }

  //to send the data dynamically (categories for the dropdown)
  private _getCategories(): void {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    })
  }

  private _addProduct(productData: FormData) {
    this.productsService.createProduct(productData).subscribe(
      (product: Product) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: `Product ${product.name} is created successfully!` });

        //to go back to the categoryList after confirmation
        timer(2000).toPromise().then(() => {
          this.location.back();
        })
      },
      () => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Product is not created.' });
      });
  }

  get productForm() {
    return this.form.controls;
  }

  //Private method we use to update our product by id
  private _updateProduct(productFormData: FormData) {
    this.productsService.updateProduct(productFormData, this.currentProductId).subscribe(
      () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Product is updated!'
        });
        timer(2000)
          .toPromise()
          .then(() => {
            this.location.back();
          });
      },
      () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Product is not updated!'
        });
      }
    );
  }

  private _checkEditMode() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.editmode = true;
        this.currentProductId = params['id'];
        this.productsService.getProduct(params['id']).subscribe(product => {
          this.form.controls.name.setValue(product.name);
          this.form.controls.category.setValue(product.category);
          this.form.controls.brand.setValue(product.brand);
          this.form.controls.price.setValue(product.price);
          this.form.controls.countInStock.setValue(product.countInStock);
          this.form.controls.isFeatured.setValue(product.isFeatured);
          this.form.controls.description.setValue(product.description);
          this.form.controls.richDescription.setValue(product.richDescription);
          this.imageDisplay = product.image;
          this.form.controls.image.setValidators([]);
          this.form.controls.image.updateValueAndValidity();
        })
      }
    })
  }

  //method to submit and cancel the add product
  onSubmit() {
    this.isSubmitted = true;
    if (this.form.invalid) {
      return;
    }
    const productFormData = new FormData();

    Object.keys(this.productForm).map((key) => {
      console.log(key);
      console.log(this.productForm[key].value);
      productFormData.append(key, this.productForm[key].value);
    });
    if(this.editmode){
      this._updateProduct(productFormData)
    }else{
      this._addProduct(productFormData)
    }
    // productFormData.append('name', this.productForm.name.value);
  }
  onCancel() {
    this.location.back();
  }
  //method to upload our images
  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.form.patchValue({ image: file });
      this.form.get('image')?.updateValueAndValidity();
      const fileReader = new FileReader();
      fileReader.onload = () => {
        this.imageDisplay = fileReader.result as string;
      }
      fileReader.readAsDataURL(file);
    }
  }












}


function onImageUpload(event: Event | undefined) {
  throw new Error('Function not implemented.');
}

