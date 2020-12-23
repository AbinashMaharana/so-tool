import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuConfigComponent } from './du-config.component';

describe('DuConfigComponent', () => {
  let component: DuConfigComponent;
  let fixture: ComponentFixture<DuConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
