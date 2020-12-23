import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdgeCloudComponent } from './edge-cloud.component';

describe('EdgeCloudComponent', () => {
  let component: EdgeCloudComponent;
  let fixture: ComponentFixture<EdgeCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdgeCloudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
