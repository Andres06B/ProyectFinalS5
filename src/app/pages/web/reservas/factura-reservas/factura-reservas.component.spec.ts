import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaReservasComponent } from './factura-reservas.component';

describe('FacturaReservasComponent', () => {
  let component: FacturaReservasComponent;
  let fixture: ComponentFixture<FacturaReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacturaReservasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
