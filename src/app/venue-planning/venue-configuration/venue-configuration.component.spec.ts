import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueConfigurationComponent } from './venue-configuration.component';

describe('VenueConfigurationComponent', () => {
  let component: VenueConfigurationComponent;
  let fixture: ComponentFixture<VenueConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenueConfigurationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
