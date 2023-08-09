import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsDiscountComponent } from './deals-discount.component';

describe('DealsDiscountComponent', () => {
  let component: DealsDiscountComponent;
  let fixture: ComponentFixture<DealsDiscountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DealsDiscountComponent]
    });
    fixture = TestBed.createComponent(DealsDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
