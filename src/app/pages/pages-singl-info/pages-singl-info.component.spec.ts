import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSinglInfoComponent } from './pages-singl-info.component';

describe('PagesSinglInfoComponent', () => {
  let component: PagesSinglInfoComponent;
  let fixture: ComponentFixture<PagesSinglInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesSinglInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesSinglInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
