import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchStatementComponent } from './switch-statement.component';

describe('SwitchStatementComponent', () => {
  let component: SwitchStatementComponent;
  let fixture: ComponentFixture<SwitchStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchStatementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
