import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHeaderRigthComponent } from './layout-header-rigth.component';

describe('LayoutHeaderRigthComponent', () => {
  let component: LayoutHeaderRigthComponent;
  let fixture: ComponentFixture<LayoutHeaderRigthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutHeaderRigthComponent]
    });
    fixture = TestBed.createComponent(LayoutHeaderRigthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
