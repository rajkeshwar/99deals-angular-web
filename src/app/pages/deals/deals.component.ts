import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent, HeaderComponent } from 'src/app/organisms';
import { MegaMenuModule } from 'primeng/megamenu';
import { responsiveOptions } from 'src/app/utils/constants';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MegaMenuCategoryComponent } from 'src/app/molecules';

@Component({
  selector: 'app-deals',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    MegaMenuModule,
    HttpClientModule,
    CarouselModule,
    CardModule,
    ButtonModule,
    MegaMenuCategoryComponent
  ],
  templateUrl: './deals.component.html',
})
export class DealsComponent implements OnInit {
  public responsiveOptions = responsiveOptions;

  public banners: any = [];
  public categories: any = [];
  public products: any = {
    Pizza: [],
    Cheese: [],
    Bacon: []
  };

  public carauselImages = [
    'https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/84ae27f93c14a4e3.jpg?q=50',
    'https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/e65b064fc53f59c2.jpg?q=50',
    'https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/3959ad9f670aeeeb.jpg?q=50',
    'https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/d417c02a9cc69fda.jpg?q=50',
    'https://rukminim2.flixcart.com/fk-p-flap/3376/560/image/84ae27f93c14a4e3.jpg?q=50',
  ];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchCategories();
    this.fetchProducts('Pizza');
    this.fetchProducts('Cheese');
    this.fetchProducts('Bacon');
    this.fetchCarouselBanners();
  }

  fetchCategories() {
    this.httpClient
      .get('/api/categories')
      .subscribe((resp) => (this.categories = resp));
  }

  fetchProducts(type:string) {
    this.httpClient
      .get(`/api/products?product=${type}`)
      .subscribe((resp) => {
        this.products[type] = resp;
        console.log('products ', this.products)
      });
  }

  fetchCarouselBanners() {
    this.httpClient
      .get('/api/banners')
      .subscribe((resp) => (this.banners = resp));
  }
}
