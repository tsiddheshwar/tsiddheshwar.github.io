import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftIndexComponent } from './left-index.component';

describe('LeftIndexComponent', () => {
  let component: LeftIndexComponent;
  let fixture: ComponentFixture<LeftIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
