import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingViewerComponent } from './landing-viewer.component';

describe('LandingViewerComponent', () => {
  let component: LandingViewerComponent;
  let fixture: ComponentFixture<LandingViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
