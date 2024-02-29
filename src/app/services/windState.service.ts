import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { WindState } from '../app.component';
import { WINDSTATES } from '../mocks/mock-windStates';

@Injectable({
  providedIn: 'root',
})
export class WindStateService {

  constructor() { }

  getWindState(): Observable<WindState[]> {
    const windState = of(WINDSTATES);
    return windState;
  }
}
