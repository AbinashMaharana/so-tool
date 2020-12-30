import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioUnitComponent } from './radio-unit.component';

describe('RadioUnitComponent', () => {
  let component: RadioUnitComponent;
  let fixture: ComponentFixture<RadioUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
