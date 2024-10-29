import { TestBed } from '@angular/core/testing';

import { HabSeleccionadaService } from './hab-seleccionada.service';

describe('HabSeleccionadaService', () => {
  let service: HabSeleccionadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabSeleccionadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
