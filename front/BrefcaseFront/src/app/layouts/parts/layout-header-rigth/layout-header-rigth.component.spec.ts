import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHeaderRightComponent } from './layout-header-right.component';

describe('LayoutHeaderRigthComponent', () => {
  let component: LayoutHeaderRightComponent;
  let fixture: ComponentFixture<LayoutHeaderRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutHeaderRightComponent]
    });
    fixture = TestBed.createComponent(LayoutHeaderRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
