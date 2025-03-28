import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioViewerComponent } from './portfolio-viewer.component';

describe('PortfolioViewerComponent', () => {
  let component: PortfolioViewerComponent;
  let fixture: ComponentFixture<PortfolioViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
