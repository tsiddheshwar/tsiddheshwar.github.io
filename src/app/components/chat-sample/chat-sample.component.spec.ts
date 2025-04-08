import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSampleComponent } from './chat-sample.component';

describe('ChatSampleComponent', () => {
  let component: ChatSampleComponent;
  let fixture: ComponentFixture<ChatSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatSampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
