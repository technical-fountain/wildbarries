import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsendComponent } from './loginsend.component';

describe('LoginsendComponent', () => {
  let component: LoginsendComponent;
  let fixture: ComponentFixture<LoginsendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginsendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginsendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
