import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GnodebNetworkConfigComponent } from './gnodeb-network-config.component';

describe('GnodebNetworkConfigComponent', () => {
  let component: GnodebNetworkConfigComponent;
  let fixture: ComponentFixture<GnodebNetworkConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GnodebNetworkConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GnodebNetworkConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
