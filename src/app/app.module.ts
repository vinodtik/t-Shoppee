import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './hero/hero.component';
import { LatestProductComponent } from './hero/latestproducts/latestproducts.component';
import { TrimStringPipe } from './shared/trim.pipe';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProductDetailsComponent } from './products/productdetails/productdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MenuComponent,
    HeroComponent,
    LatestProductComponent,
    TrimStringPipe,
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
