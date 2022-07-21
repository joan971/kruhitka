import { NgxStripeModule } from 'ngx-stripe';
import { CategoriesService } from './../../../../libs/products/src/lib/services/categories.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

//Component module
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { ProductsFormComponent } from './pages/products/products-form/products-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { AuthGuard, JwtInterceptor, UsersModule } from '@redbits/users';

//UX
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { TagModule } from 'primeng/tag';
import { InputMaskModule } from 'primeng/inputmask';
import { UsersFormComponent } from './pages/users/users-form/users-form.component';
import { OrdersListComponent } from './pages/orders/orders-list/orders-list.component';
import { OrdersDetailComponent } from './pages/orders/orders-detail/orders-detail.component';
import {FieldsetModule} from 'primeng/fieldset';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';



const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    canActivate:[AuthGuard],
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'categories',
        component: CategoriesListComponent
      },
      {
        path: 'categories/form',
        component: CategoriesFormComponent
      },
      {
        path: 'categories/form/:id',
        component: CategoriesFormComponent
      },
      {
        path: 'products',
        component: ProductsListComponent
      },
      {
        path: 'products/form',
        component: ProductsFormComponent
      },
      {
        path: 'products/form/:id',
        component: ProductsFormComponent
      },
      {
        path: 'users',
        component: UsersListComponent
      },
      {
        path: 'users/form',
        component: UsersFormComponent
      },
       {
       path: 'users/form/:id',
      component: UsersFormComponent
      },
      {
        path: 'orders',
        component: OrdersListComponent
      },
      {
        path: 'orders/:id',
        component: OrdersDetailComponent
      }
    ]
  },
];

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, DashboardComponent,
    ShellComponent, SidebarComponent, CategoriesListComponent, CategoriesFormComponent, ProductsListComponent,
    ProductsFormComponent, UsersListComponent, UsersFormComponent, OrdersListComponent, OrdersDetailComponent,],


  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
    CardModule,
    ToolbarModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    ButtonModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    ColorPickerModule,
    ConfirmDialogModule,
    InputNumberModule,
    InputTextareaModule,
    InputSwitchModule,
    DropdownModule,
    EditorModule,
    TagModule,
    UsersModule,
    FieldsetModule,
    NgxStripeModule.forRoot('pk_test_51IUDnGKAfI2qPdhfXRsBJan4VHKdsG6Ej73au6i5GSC8hODDZJvNIhPxKoX7GJng1QwVsRhYZDCPkjEQ3AcrXAfN00p0ww86kB'),
    InputTextModule,
    InputMaskModule
  ],

  //always imports les services dans le provider
  providers: [CategoriesService, MessageService, ConfirmationService,
{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
