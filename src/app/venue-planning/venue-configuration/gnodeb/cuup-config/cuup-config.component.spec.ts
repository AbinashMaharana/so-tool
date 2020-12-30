import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuupConfigComponent } from './cuup-config.component';

describe('CuupConfigComponent', () => {
  let component: CuupConfigComponent;
  let fixture: ComponentFixture<CuupConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuupConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuupConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
