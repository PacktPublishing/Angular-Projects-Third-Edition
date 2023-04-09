import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapturePage } from './capture.page';

describe('CapturePage', () => {
  let component: CapturePage;
  let fixture: ComponentFixture<CapturePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CapturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
