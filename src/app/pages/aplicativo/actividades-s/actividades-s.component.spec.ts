import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesSComponent } from './actividades-s.component';

describe('ActividadesSComponent', () => {
  let component: ActividadesSComponent;
  let fixture: ComponentFixture<ActividadesSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActividadesSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActividadesSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
