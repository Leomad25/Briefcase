import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHeaderLeftComponent } from './layout-header-left.component';

describe('LayoutHeaderLeftComponent', () => {
  let component: LayoutHeaderLeftComponent;
  let fixture: ComponentFixture<LayoutHeaderLeftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutHeaderLeftComponent]
    });
    fixture = TestBed.createComponent(LayoutHeaderLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
