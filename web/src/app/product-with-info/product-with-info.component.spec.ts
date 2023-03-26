import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWithInfoComponent } from './product-with-info.component';

describe('ProductWithInfoComponent', () => {
  let component: ProductWithInfoComponent;
  let fixture: ComponentFixture<ProductWithInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductWithInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductWithInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
