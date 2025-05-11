import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalUseComponent } from './signal-use.component';

describe('SignalUseComponent', () => {
  let component: SignalUseComponent;
  let fixture: ComponentFixture<SignalUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalUseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
