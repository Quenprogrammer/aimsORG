import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bog } from './bog';

describe('Bog', () => {
  let component: Bog;
  let fixture: ComponentFixture<Bog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
