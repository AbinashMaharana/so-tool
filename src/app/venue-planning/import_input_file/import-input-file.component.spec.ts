import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportInputFileComponent } from './import-input-file.component';

describe('ImportInputFileComponent', () => {
  let component: ImportInputFileComponent;
  let fixture: ComponentFixture<ImportInputFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportInputFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportInputFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
