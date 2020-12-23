import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnodebComponent } from './gnodeb.component';

describe('GnodebComponent', () => {
  let component: GnodebComponent;
  let fixture: ComponentFixture<GnodebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GnodebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GnodebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
