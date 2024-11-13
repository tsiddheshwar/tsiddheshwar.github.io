import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkSamplesComponent } from './my-work-samples.component';

describe('MyWorkSamplesComponent', () => {
  let component: MyWorkSamplesComponent;
  let fixture: ComponentFixture<MyWorkSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyWorkSamplesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyWorkSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
