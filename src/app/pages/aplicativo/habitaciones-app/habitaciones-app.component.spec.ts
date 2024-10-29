import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionesAppComponent } from './habitaciones-app.component';

describe('HabitacionesAppComponent', () => {
  let component: HabitacionesAppComponent;
  let fixture: ComponentFixture<HabitacionesAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HabitacionesAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitacionesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
