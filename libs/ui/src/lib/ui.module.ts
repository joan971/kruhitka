import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { SliderComponent } from './slider/slider.component';
import { ButtonModule } from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';
import { UiGalleryComponent } from './ui-gallery/ui-gallery.component';








@NgModule({
  imports: [CommonModule, CarouselModule, ButtonModule],
  declarations: [
    BannerComponent,
    SliderComponent,
    UiGalleryComponent,


  ],
  exports: [
    BannerComponent,
    SliderComponent,
     UiGalleryComponent,
  ],
})
export class UiModule {}
