import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbard2Component } from './navbard2.component';

describe('Navbard2Component', () => {
  let component: Navbard2Component;
  let fixture: ComponentFixture<Navbard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Navbard2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navbard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
