import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoFooterComponent } from './so-footer.component';

describe('SoFooterComponent', () => {
  let component: SoFooterComponent;
  let fixture: ComponentFixture<SoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
