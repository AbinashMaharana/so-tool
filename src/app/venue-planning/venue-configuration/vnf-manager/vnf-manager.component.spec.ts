import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VnfManagerComponent } from './vnf-manager.component';

describe('VnfManagerComponent', () => {
  let component: VnfManagerComponent;
  let fixture: ComponentFixture<VnfManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VnfManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VnfManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
