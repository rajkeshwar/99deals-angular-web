import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoVideosComponent } from './promo-videos.component';

describe('PromoVideosComponent', () => {
  let component: PromoVideosComponent;
  let fixture: ComponentFixture<PromoVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PromoVideosComponent]
    });
    fixture = TestBed.createComponent(PromoVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
