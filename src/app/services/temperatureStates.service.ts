import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { TemeratureState } from '../app.component';
import { TEMPERATURESTATE } from '../mocks/mock-temperatureStates';

@Injectable({
  providedIn: 'root',
})
export class TemperatureStateService {

  constructor() { }

  getTemperatureState(): Observable<TemeratureState[]> {
    const temperatureState = of(TEMPERATURESTATE);
    return temperatureState;
  }
}
