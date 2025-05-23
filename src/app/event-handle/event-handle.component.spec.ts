import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHandleComponent } from './event-handle.component';

describe('EventHandleComponent', () => {
  let component: EventHandleComponent;
  let fixture: ComponentFixture<EventHandleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventHandleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
