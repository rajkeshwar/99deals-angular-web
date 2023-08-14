import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent, HeaderComponent } from 'src/app/organisms';
import { MegaMenuCategoryComponent } from 'src/app/molecules';
import { HttpClient } from '@angular/common/http';
import { CarouselModule } from 'primeng/carousel';
import { responsiveOptions } from 'src/app/utils/constants';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-promo-videos',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    MegaMenuCategoryComponent,
    CarouselModule,
    CardModule,
    ButtonModule
  ],
  templateUrl: './promo-videos.component.html',
})
export class PromoVideosComponent {
  public responsiveOptions = responsiveOptions;
  public categories: any = [];
  public banners: any = [];
  public videos: any = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchVideos()
    this.fetchCategories();
    this.fetchCarouselBanners();
  }

  fetchCategories() {
    this.httpClient
      .get('/api/categories')
      .subscribe((resp) => (this.categories = resp));
  }

  fetchCarouselBanners() {
    this.httpClient
      .get('/api/banners')
      .subscribe((resp) => (this.banners = resp));
  }

  fetchVideos() {
    this.httpClient
      .get(`/api/products?limit=10`)
      .subscribe((resp) => this.videos = resp);
  }
}
