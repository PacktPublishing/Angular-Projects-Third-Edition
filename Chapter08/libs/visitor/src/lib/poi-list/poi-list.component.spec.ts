import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiListComponent } from './poi-list.component';

describe('PoiListComponent', () => {
  let component: PoiListComponent;
  let fixture: ComponentFixture<PoiListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoiListComponent]
    });
    fixture = TestBed.createComponent(PoiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
