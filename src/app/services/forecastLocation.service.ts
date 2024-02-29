import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ForecastLocation } from '../app.component';
import { FORECASTLOCATIONS } from '../mocks/mock-locations';

@Injectable({
  providedIn: 'root',
})
export class ForecastLocationService {

  constructor() { }

  getForecastLocations(): Observable<ForecastLocation[]> {
    const forecastLocations = of(FORECASTLOCATIONS);
    return forecastLocations;
  }
}
