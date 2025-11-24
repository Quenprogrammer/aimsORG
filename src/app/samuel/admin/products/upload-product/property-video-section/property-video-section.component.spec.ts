import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyVideoSectionComponent } from './property-video-section.component';

describe('PropertyVideoSectionComponent', () => {
  let component: PropertyVideoSectionComponent;
  let fixture: ComponentFixture<PropertyVideoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyVideoSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PropertyVideoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
