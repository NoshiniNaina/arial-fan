import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './banner/banner.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { ChooseComponent } from './choose/choose.component';
import { AboutComponent } from './about/about.component';
import { GallaryComponent } from './gallary/gallary.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        BannerComponent,
        BestSellerComponent,
        ChooseComponent,
        AboutComponent,
        GallaryComponent,
        FooterComponent,
    ],
    exports: [
        BannerComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
