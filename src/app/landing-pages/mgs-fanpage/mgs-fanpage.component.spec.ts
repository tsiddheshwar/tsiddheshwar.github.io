import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgsFanpageComponent } from './mgs-fanpage.component';

describe('MgsFanpageComponent', () => {
  let component: MgsFanpageComponent;
  let fixture: ComponentFixture<MgsFanpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MgsFanpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MgsFanpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
