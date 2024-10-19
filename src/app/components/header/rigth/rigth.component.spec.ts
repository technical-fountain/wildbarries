import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RigthComponent } from './rigth.component';

describe('RigthComponent', () => {
  let component: RigthComponent;
  let fixture: ComponentFixture<RigthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RigthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RigthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
