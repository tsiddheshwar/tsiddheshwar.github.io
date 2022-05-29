import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicSynopsisComponent } from './academic-synopsis.component';

describe('AcademicSynopsisComponent', () => {
  let component: AcademicSynopsisComponent;
  let fixture: ComponentFixture<AcademicSynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademicSynopsisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicSynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
