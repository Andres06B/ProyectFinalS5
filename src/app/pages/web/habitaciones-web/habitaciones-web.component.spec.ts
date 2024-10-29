import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabitacionesWebComponent } from './habitaciones-web.component';

describe('HabitacionesWebComponent', () => {
  let component: HabitacionesWebComponent;
  let fixture: ComponentFixture<HabitacionesWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HabitacionesWebComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabitacionesWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
