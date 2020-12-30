import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CucpConfigComponent } from './cucp-config.component';

describe('CucpConfigComponent', () => {
  let component: CucpConfigComponent;
  let fixture: ComponentFixture<CucpConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CucpConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CucpConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
