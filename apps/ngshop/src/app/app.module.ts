import { OrdersModule } from './../../../../libs/orders/src/lib/orders.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UiModule } from '@redbits/ui';
import { AccordionModule } from 'primeng/accordion';
import { NavComponent } from './shared/nav/nav.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MessagesComponent } from './shared/messages/messages.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ProductsModule } from '@redbits/products';
import { JwtInterceptor, UsersModule } from '@redbits/users';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgxStripeModule } from 'ngx-stripe';

const routes: Routes = [
  { path: '', component: HomePageComponent },

]

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HomePageComponent,
    HeaderComponent, FooterComponent, NavComponent, MessagesComponent],


  imports: [BrowserModule,
    ProductsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    UiModule,
    HttpClientModule,
    AccordionModule,
    OrdersModule,
    ToastModule,
    UsersModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    NgxStripeModule.forRoot('pk_test_51IUDnGKAfI2qPdhfXRsBJan4VHKdsG6Ej73au6i5GSC8hODDZJvNIhPxKoX7GJng1QwVsRhYZDCPkjEQ3AcrXAfN00p0ww86kB'),
    //NgbModule
    //NgModule
  ],


  providers: [
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  exports: [
    MessagesComponent
  ],
})
export class AppModule { }
