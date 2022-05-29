import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidatedResumeComponent } from './consolidated-resume.component';

describe('ConsolidatedResumeComponent', () => {
  let component: ConsolidatedResumeComponent;
  let fixture: ComponentFixture<ConsolidatedResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsolidatedResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidatedResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
