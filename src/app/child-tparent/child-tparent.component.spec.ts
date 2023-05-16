import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTParentComponent } from './child-tparent.component';

describe('ChildTParentComponent', () => {
  let component: ChildTParentComponent;
  let fixture: ComponentFixture<ChildTParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildTParentComponent]
    });
    fixture = TestBed.createComponent(ChildTParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
