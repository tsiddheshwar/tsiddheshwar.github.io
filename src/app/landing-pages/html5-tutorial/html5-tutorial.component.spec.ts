import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Html5TutorialComponent } from './html5-tutorial.component';

describe('Html5TutorialComponent', () => {
  let component: Html5TutorialComponent;
  let fixture: ComponentFixture<Html5TutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Html5TutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Html5TutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
