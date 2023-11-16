import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHeaderBannerComponent } from './layout-header-banner.component';

describe('LayoutHeaderBannerComponent', () => {
  let component: LayoutHeaderBannerComponent;
  let fixture: ComponentFixture<LayoutHeaderBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutHeaderBannerComponent]
    });
    fixture = TestBed.createComponent(LayoutHeaderBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
