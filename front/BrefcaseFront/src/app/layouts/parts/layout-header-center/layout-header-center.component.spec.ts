import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHeaderCenterComponent } from './layout-header-center.component';

describe('LayoutHeaderCenterComponent', () => {
  let component: LayoutHeaderCenterComponent;
  let fixture: ComponentFixture<LayoutHeaderCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutHeaderCenterComponent]
    });
    fixture = TestBed.createComponent(LayoutHeaderCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
