import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoInfoComponent } from './promo-info.component';

describe('PromoInfoComponent', () => {
  let component: PromoInfoComponent;
  let fixture: ComponentFixture<PromoInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PromoInfoComponent]
    });
    fixture = TestBed.createComponent(PromoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
