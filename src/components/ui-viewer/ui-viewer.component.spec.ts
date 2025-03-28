import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiViewerComponent } from './ui-viewer.component';

describe('UiViewerComponent', () => {
  let component: UiViewerComponent;
  let fixture: ComponentFixture<UiViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
